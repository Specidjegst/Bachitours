import { useTranslations } from "next-intl";
import { MessageCircle, Mail } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

const operatorEmail = process.env.OPERATOR_EMAIL || "info@bachitours.com";

export function ContactCta() {
  const t = useTranslations("contactCta");
  const tWa = useTranslations("whatsappPrefill");
  const waUrl = operatorWaUrl(tWa("general"));
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-xl2 bg-deep p-6 text-center text-white sm:p-10 md:p-14">
          <h2 className="h2 text-cream">{t("title")}</h2>
          <p className="lead mt-3 text-cream/90">{t("text")}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} /> {t("whatsapp")}
            </a>
            <a
              href={`mailto:${operatorEmail}`}
              className="btn bg-white text-deep hover:bg-cream"
            >
              <Mail size={18} /> {t("email")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
