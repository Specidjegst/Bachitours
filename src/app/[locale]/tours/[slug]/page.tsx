import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { tours, getAllSlugsForLocale, getTourBySlug } from "@/data/tours";
import { Gallery } from "@/components/tour/Gallery";
import { Link } from "@/i18n/routing";
import { Clock, Users, MapPin, Languages, Check, X, AlertTriangle, ShieldCheck, MessageCircle } from "lucide-react";
import { TourCard } from "@/components/ui/TourCard";
import { formatPrice } from "@/lib/utils";
import { operatorWaUrl } from "@/lib/whatsapp";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of getAllSlugsForLocale(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(locale, slug);
  if (!tour) return {};
  const content = tour.i18n[locale as Locale];
  return {
    title: content.title,
    description: content.shortDescription,
    openGraph: {
      title: content.title,
      description: content.shortDescription,
      images: [tour.images[0].src],
    },
  };
}

export default async function TourDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tour = getTourBySlug(locale, slug);
  if (!tour) notFound();

  const content = tour.i18n[locale as Locale];
  const t = await getTranslations({ locale, namespace: "tourDetail" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tWa = await getTranslations({ locale, namespace: "whatsappPrefill" });
  const similar = tours.filter((x) => x.id !== tour.id).slice(0, 3);
  const waText = tWa("tour", { tour: content.title });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: content.title,
    description: content.description,
    image: tour.images.map((i) => i.src),
    provider: {
      "@type": "TravelAgency",
      name: "Bachitours",
      areaServed: "Poreč, Croatia",
    },
    offers: {
      "@type": "Offer",
      price: tour.pricing.adult,
      priceCurrency: tour.pricing.currency,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-cream">
        <div className="container-x py-10 md:py-14">
          <nav className="mb-4 text-sm text-muted">
            <Link href="/" className="hover:text-primary">{tCommon("back")}</Link>
            <span className="mx-2">›</span>
            <Link href="/tours" className="hover:text-primary">Tours</Link>
          </nav>
          <h1 className="h1 mb-4 max-w-3xl text-deep">{content.title}</h1>

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="chip"><Clock size={14} /> {tour.durationHours}h</span>
            <span className="chip"><Users size={14} /> max {tour.maxGuests}</span>
            <span className="chip"><MapPin size={14} /> {content.meetingPointLabel}</span>
            <span className="chip"><Languages size={14} /> {tour.languages.map((l) => l.toUpperCase()).join(" · ")}</span>
            {tour.isPrivate && <span className="chip bg-deep text-white">{tCommon("private")}</span>}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="min-w-0">
              <Gallery images={tour.images} />

              <section className="mt-10">
                <h2 className="h3 mb-3 text-deep">{t("overview")}</h2>
                <p className="text-ink leading-relaxed">{content.description}</p>
              </section>

              <section className="mt-10">
                <h2 className="h3 mb-4 text-deep">{t("highlights")}</h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {content.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-ink">
                      <Check className="mt-0.5 shrink-0 text-success" size={18} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-deep">{t("included")}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {content.included.map((i, k) => (
                      <li key={k} className="flex gap-2"><Check size={16} className="mt-0.5 text-success" /> {i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-deep">{t("notIncluded")}</h3>
                  <ul className="space-y-1.5 text-sm">
                    {content.notIncluded.map((i, k) => (
                      <li key={k} className="flex gap-2"><X size={16} className="mt-0.5 text-muted" /> {i}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-10">
                <h2 className="h3 mb-4 text-deep">{t("schedule")}</h2>
                <ol className="space-y-3 border-l-2 border-line pl-5">
                  {content.schedule.map((s, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-cream"></span>
                      <div className="text-sm font-semibold text-deep">{s.time}</div>
                      <div className="text-sm text-ink">{s.text}</div>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-white p-5">
                  <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-deep">
                    <AlertTriangle size={18} className="text-sun" /> {t("important")}
                  </h3>
                  <ul className="space-y-1 text-sm text-muted">
                    {content.importantNotes.map((n, i) => (
                      <li key={i}>• {n}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl2 border border-line bg-white p-5">
                  <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-deep">
                    <ShieldCheck size={18} className="text-success" /> {t("cancellation")}
                  </h3>
                  <p className="text-sm text-muted">{t("cancellationPolicy")}</p>
                  <p className="mt-2 text-sm text-muted">{t("weatherPolicy")}</p>
                </div>
              </section>

              <section className="mt-10 rounded-xl2 bg-sand/40 p-6">
                <p className="text-sm text-deep"><strong>💳 </strong>{t("paymentInfo")}</p>
              </section>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl2 bg-white p-6 shadow-card">
                <div className="mb-3 text-sm text-muted">{tCommon("from")}</div>
                <div className="mb-1 text-3xl font-bold text-deep">
                  {formatPrice(tour.pricing.adult, locale)}
                </div>
                <div className="mb-5 text-sm text-muted">{tCommon("perPerson")}</div>
                <Link
                  href={{ pathname: "/booking", query: { tour: tour.id } }}
                  className="btn-primary w-full"
                >
                  {tCommon("bookNow")}
                </Link>
                <a
                  href={operatorWaUrl(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-3 w-full"
                >
                  <MessageCircle size={18} /> {tCommon("whatsappShort")}
                </a>
                <p className="mt-4 text-xs text-muted">
                  {t("cancellationPolicy")}
                </p>
              </div>
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="h3 mb-6 text-deep">{t("similar")}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
