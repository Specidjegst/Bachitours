"use client";
import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

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
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1.5 text-sm font-medium text-deep hover:bg-white"
        aria-label="Language"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Globe size={16} />
        <span className="uppercase">{locale}</span>
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-[160px] max-w-[calc(100vw-2rem)] rounded-xl bg-white p-2 shadow-cardHover ring-1 ring-line"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={buildHref(l) as any}
                locale={l}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm hover:bg-cream ${l === locale ? "font-semibold text-primary" : "text-ink"}`}
              >
                {l === "de" ? "Deutsch" : l === "en" ? "English" : l === "hr" ? "Hrvatski" : "Français"}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
