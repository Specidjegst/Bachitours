import { useTranslations } from "next-intl";
import { MapPin, Heart, MessageCircle, Users, ShieldCheck, Mail } from "lucide-react";

const items = [
  { key: "local", Icon: MapPin },
  { key: "service", Icon: Heart },
  { key: "support", Icon: MessageCircle },
  { key: "family", Icon: Users },
  { key: "secure", Icon: ShieldCheck },
  { key: "tickets", Icon: Mail },
] as const;

export function WhyBook() {
  const t = useTranslations("why");
  return (
    <section className="section bg-white">
      <div className="container-x">
        <h2 className="h2 mb-10 text-center text-deep">{t("title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, Icon }) => (
            <div key={key} className="rounded-xl2 border border-line bg-cream p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="mb-1.5 text-lg font-semibold text-deep">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm text-muted">{t(`items.${key}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
