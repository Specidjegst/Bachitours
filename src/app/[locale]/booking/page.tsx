import { setRequestLocale, getTranslations } from "next-intl/server";
import { BookingForm } from "@/components/booking/BookingForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "booking" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function BookingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tour?: string }>;
}) {
  const { locale } = await params;
  const { tour } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "booking" });

  return (
    <div className="bg-cream">
      <div className="container-x py-12 md:py-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="h1 text-deep">{t("title")}</h1>
          <p className="lead mt-3">{t("subtitle")}</p>
        </div>
        <BookingForm initialTour={tour} />
      </div>
    </div>
  );
}
