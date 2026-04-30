"use client";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname, routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { tours } from "@/data/tours";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams() as Record<string, string>;

  const buildHref = (target: string) => {
    if (pathname === "/tours/[slug]" && params?.slug) {
      const tour = tours.find((t) => t.i18n[locale as Locale]?.slug === params.slug);
      if (tour) {
        const targetSlug = tour.i18n[target as Locale].slug;
        return { pathname: "/tours/[slug]" as const, params: { slug: targetSlug } };
      }
    }
    return pathname;
  };

  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1.5 text-sm font-medium text-deep hover:bg-white"
        aria-label="Language"
      >
        <Globe size={16} />
        <span className="uppercase">{locale}</span>
      </button>
      <ul className="invisible absolute right-0 top-full z-50 mt-2 min-w-[160px] rounded-xl bg-white p-2 opacity-0 shadow-cardHover ring-1 ring-line transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {routing.locales.map((l) => (
          <li key={l}>
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              href={buildHref(l) as any}
              locale={l}
              className={`block rounded-lg px-3 py-2 text-sm hover:bg-cream ${l === locale ? "font-semibold text-primary" : "text-ink"}`}
            >
              {l === "de" ? "Deutsch" : l === "en" ? "English" : l === "hr" ? "Hrvatski" : "Français"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
