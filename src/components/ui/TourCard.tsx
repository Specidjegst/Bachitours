import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Clock, MapPin, Users } from "lucide-react";
import type { Tour } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function TourCard({ tour }: { tour: Tour }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const content = tour.i18n[locale];

  return (
    <Link
      href={{ pathname: "/tours/[slug]", params: { slug: content.slug } }}
      className="card group block overflow-hidden"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={tour.images[0].src}
          alt={tour.images[0].alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tour.isPrivate && (
          <span className="absolute left-3 top-3 rounded-full bg-deep/90 px-3 py-1 text-xs font-medium text-white">
            {t("private")}
          </span>
        )}
        <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-deep shadow-card">
          {t("from")} {formatPrice(tour.pricing.adult, locale)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-ink group-hover:text-primary">
          {content.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted">{content.shortDescription}</p>
        <div className="flex flex-wrap gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock size={14} /> {tour.durationHours}h
          </span>
          <span className="inline-flex items-center gap-1">
            <Users size={14} /> max {tour.maxGuests}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} /> Poreč
          </span>
        </div>
      </div>
    </Link>
  );
}
