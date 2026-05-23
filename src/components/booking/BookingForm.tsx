"use client";
import { useState, useMemo, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingInput } from "@/lib/schema";
import { tours } from "@/data/tours";
import { calcTotal, formatPrice } from "@/lib/utils";
import { Minus, Plus, ArrowLeft, ArrowRight, Send } from "lucide-react";
import type { Locale } from "@/i18n/routing";

export function BookingForm({ initialTour }: { initialTour?: string }) {
  const t = useTranslations("booking");
  const tCommon = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      tourId: initialTour || tours[0].id,
      date: "",
      time: "",
      adults: 2,
      kids: 0,
      infants: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      language: locale,
      message: "",
      locale,
    },
  });

  const tourId = watch("tourId");
  const adults = watch("adults");
  const kids = watch("kids");

  const tour = tours.find((x) => x.id === tourId)!;
  const total = useMemo(
    () => calcTotal(tour.pricing.adult, adults, kids, tour.pricing.childDiscountPct),
    [tour, adults, kids]
  );

  const schedule = tour.i18n[locale].schedule;
  const startTime = schedule[0]?.time ?? "";
  const endTime = schedule[schedule.length - 1]?.time ?? "";
  const hasFixedTime = schedule.length > 0 && /^\d/.test(startTime);
  const fixedTimeRange = hasFixedTime ? `${startTime} – ${endTime}` : "";

  useEffect(() => {
    setValue("time", hasFixedTime ? fixedTimeRange : "");
  }, [tourId, hasFixedTime, fixedTimeRange, setValue]);

  async function onSubmit(values: BookingInput) {
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "failed");
      const params = new URLSearchParams({
        ref: data.ref,
        tour: tour.i18n[locale].title,
        date: values.date,
        guests: String(values.adults + values.kids + values.infants),
        wa: data.whatsappUrl,
      });
      router.push(`/booking/thanks?${params.toString()}` as never);
    } catch (e) {
      console.error(e);
      setServerError(t("errors.general"));
      setSubmitting(false);
    }
  }

  async function next() {
    const fields: (keyof BookingInput)[] =
      step === 1 ? ["tourId", "date", "adults", "kids", "infants"] :
      step === 2 ? ["firstName", "lastName", "email", "phone", "language"] : [];
    const ok = await trigger(fields as never);
    if (ok) setStep((s) => Math.min(3, s + 1));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center gap-2 text-sm">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                step >= n ? "bg-deep text-white" : "bg-line text-muted"
              }`}
            >
              {n}
            </div>
            <span className={`hidden md:inline ${step >= n ? "text-deep" : "text-muted"}`}>
              {t(`stepLabels.${n}` as "stepLabels.1")}
            </span>
            {n < 3 && <div className={`h-0.5 flex-1 ${step > n ? "bg-deep" : "bg-line"}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-5 rounded-xl2 bg-white p-4 shadow-card sm:p-6">
          <div>
            <label className="label">{t("tour")}</label>
            <select className="input" {...register("tourId")}>
              {tours.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.i18n[locale].title}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">{t("date")}</label>
              <input type="date" className="input" {...register("date")} min={new Date().toISOString().slice(0, 10)} />
              {errors.date && <p className="mt-1 text-xs text-red-600">{t("errors.required")}</p>}
            </div>
            <div>
              <label className="label">{t("time")}</label>
              {hasFixedTime ? (
                <input
                  type="text"
                  readOnly
                  value={fixedTimeRange}
                  className="input cursor-not-allowed bg-cream/60"
                />
              ) : (
                <input type="time" className="input" {...register("time")} />
              )}
            </div>
          </div>

          <Stepper name="adults" label={t("adults")} control={control} min={1} />
          <Stepper name="kids" label={t("kids")} control={control} />
          <Stepper name="infants" label={t("infants")} control={control} />
          <p className="text-xs text-muted">{t("guestsNote")}</p>

          <div className="flex items-center justify-between rounded-xl bg-cream p-4">
            <span className="text-sm font-medium text-deep">{t("estimatedPrice")}</span>
            <span className="text-2xl font-bold text-deep">{formatPrice(total, locale)}</span>
          </div>

          <button type="button" onClick={next} className="btn-primary w-full">
            {tCommon("next")} <ArrowRight size={18} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5 rounded-xl2 bg-white p-4 shadow-card sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label">{t("firstName")}</label>
              <input className="input" {...register("firstName")} />
              {errors.firstName && <p className="mt-1 text-xs text-red-600">{t("errors.required")}</p>}
            </div>
            <div>
              <label className="label">{t("lastName")}</label>
              <input className="input" {...register("lastName")} />
              {errors.lastName && <p className="mt-1 text-xs text-red-600">{t("errors.required")}</p>}
            </div>
          </div>
          <div>
            <label className="label">{t("email")}</label>
            <input type="email" className="input" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{t("errors.email")}</p>}
          </div>
          <div>
            <label className="label">{t("phone")}</label>
            <input type="tel" className="input" placeholder="+385 ..." {...register("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{t("errors.phone")}</p>}
          </div>
          <div>
            <label className="label">{t("language")}</label>
            <select className="input" {...register("language")}>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
              <option value="hr">Hrvatski</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="ru">Русский</option>
              <option value="pl">Polski</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="btn-ghost">
              <ArrowLeft size={18} /> {tCommon("previous")}
            </button>
            <button type="button" onClick={next} className="btn-primary">
              {tCommon("next")} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5 rounded-xl2 bg-white p-4 shadow-card sm:p-6">
          <div>
            <label className="label">{t("message")}</label>
            <textarea className="input" rows={4} {...register("message")} />
          </div>
          <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" {...register("consentTerms")} className="mt-1" />
            <span>{t("consentTerms")}</span>
          </label>
          {errors.consentTerms && <p className="text-xs text-red-600">{t("errors.consent")}</p>}
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" {...register("consentPrivacy")} className="mt-1" />
            <span>{t("consentPrivacy")}</span>
          </label>
          {errors.consentPrivacy && <p className="text-xs text-red-600">{t("errors.consent")}</p>}

          <div className="rounded-xl bg-cream p-4 text-sm">
            <div className="font-semibold text-deep">{tour.i18n[locale].title}</div>
            <div className="text-muted">{watch("date")} · {watch("adults")} + {watch("kids")} + {watch("infants")}</div>
            <div className="mt-2 text-lg font-bold text-deep">{formatPrice(total, locale)}</div>
          </div>

          {serverError && <p className="text-sm text-red-600">{serverError}</p>}

          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(2)} className="btn-ghost">
              <ArrowLeft size={18} /> {tCommon("previous")}
            </button>
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? t("submitting") : <>{t("submit")} <Send size={18} /></>}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

function Stepper({
  name,
  label,
  control,
  min = 0,
  max = 30,
}: {
  name: "adults" | "kids" | "infants";
  label: string;
  control: ReturnType<typeof useForm<BookingInput>>["control"];
  min?: number;
  max?: number;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex items-center justify-between rounded-xl border border-line bg-white p-3">
          <span className="text-sm font-medium text-deep">{label}</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => field.onChange(Math.max(min, (field.value ?? 0) - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-deep hover:bg-cream"
              aria-label="-"
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center font-semibold">{field.value ?? 0}</span>
            <button
              type="button"
              onClick={() => field.onChange(Math.min(max, (field.value ?? 0) + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-deep hover:bg-cream"
              aria-label="+"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      )}
    />
  );
}
