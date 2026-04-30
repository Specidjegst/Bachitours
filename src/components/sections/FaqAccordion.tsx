"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ limit }: { limit?: number }) {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  const list = limit ? items.slice(0, limit) : items;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-white" id="faq">
      <div className="container-x max-w-3xl">
        <h2 className="h2 mb-10 text-center text-deep">{t("title")}</h2>
        <div className="space-y-3">
          {list.map((item, i) => (
            <div key={i} className="rounded-xl2 border border-line bg-cream">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-deep">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
