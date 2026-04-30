import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

export function Reviews() {
  const t = useTranslations("reviews");
  const items = t.raw("items") as { text: string; author: string; city: string }[];
  return (
    <section className="section bg-sand/40">
      <div className="container-x">
        <h2 className="h2 mb-10 text-center text-deep">{t("title")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <figure key={i} className="rounded-xl2 bg-white p-6 shadow-card">
              <div className="mb-3 flex gap-0.5 text-sun">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mb-4 text-ink">„{item.text}"</blockquote>
              <figcaption className="text-sm font-medium text-muted">
                {item.author} · {item.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
