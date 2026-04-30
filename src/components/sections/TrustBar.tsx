import { useTranslations } from "next-intl";
import { Anchor, MessageSquare, Mail } from "lucide-react";

export function TrustBar() {
  const t = useTranslations("trustBar");
  const items = [
    { icon: Anchor, text: t("local") },
    { icon: MessageSquare, text: t("support") },
    { icon: Mail, text: t("tickets") },
  ];
  return (
    <section className="border-y border-line bg-white/70">
      <div className="container-x grid gap-6 py-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-deep">
            <Icon size={20} className="shrink-0 text-accent" />
            <span className="font-medium">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
