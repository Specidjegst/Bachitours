import { setRequestLocale, getTranslations } from "next-intl/server";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/ui/TourCard";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tours" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tours" });

  return (
    <div className="bg-cream">
      <div className="container-x py-10 sm:py-14 md:py-20">
        <h1 className="h1 mb-3 text-deep">{t("title")}</h1>
        <p className="lead mb-8 max-w-2xl sm:mb-10">{t("subtitle")}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}
