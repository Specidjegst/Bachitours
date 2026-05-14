import { setRequestLocale, getTranslations } from "next-intl/server";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

const operatorEmail = process.env.OPERATOR_EMAIL || "info@bachitours.com";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tWa = await getTranslations({ locale, namespace: "whatsappPrefill" });

  return (
    <div className="container-x py-16 md:py-24 max-w-3xl">
      <h1 className="h1 mb-6 text-deep">{t("title")}</h1>
      <p className="lead mb-10">{t("lead")}</p>
      <div className="grid gap-4">
        <a href={operatorWaUrl(tWa("general"))} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl2 bg-white p-5 shadow-card hover:shadow-cardHover">
          <MessageCircle className="text-success" />
          <div>
            <div className="text-sm font-semibold text-deep">{t("phoneLabel")}</div>
            <div className="text-ink">+385 98 935 6521</div>
          </div>
        </a>
        <a href={`mailto:${operatorEmail}`} className="flex items-center gap-3 rounded-xl2 bg-white p-5 shadow-card hover:shadow-cardHover">
          <Mail className="text-primary" />
          <div>
            <div className="text-sm font-semibold text-deep">{t("emailLabel")}</div>
            <div className="text-ink">{operatorEmail}</div>
          </div>
        </a>
        <a
          href="https://maps.app.goo.gl/UuYF8w2s2DkyThLi6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl2 bg-white p-5 shadow-card hover:shadow-cardHover"
        >
          <MapPin className="text-deep" />
          <div>
            <div className="text-sm font-semibold text-deep">{t("addressLabel")}</div>
            <div className="text-ink">{t("address")}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
