import { useTranslations } from "next-intl";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/ui/TourCard";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function PopularTours() {
  const t = useTranslations("popularTours");
  const tCommon = useTranslations("common");
  const featured = tours.filter((t) => t.featured);

  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="h2 text-deep">{t("title")}</h2>
            <p className="lead mt-2">{t("subtitle")}</p>
          </div>
          <Link
            href="/tours"
            className="hidden items-center gap-1 text-sm font-semibold text-primary hover:underline md:inline-flex"
          >
            {tCommon("viewAllTours")} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
