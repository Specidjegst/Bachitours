import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

const operatorEmail = process.env.OPERATOR_EMAIL || "info@bachitours.com";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const tWa = useTranslations("whatsappPrefill");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-deep text-cream">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:py-14">
        <div className="md:col-span-2">
          <Logo textColor="#FBF7EE" />
          <p className="mt-4 max-w-sm text-sm text-cream/80">{t("tagline")}</p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              href={operatorWaUrl(tWa("general"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/90 hover:text-accent"
            >
              <MessageCircle size={16} /> +385 98 935 6521
            </a>
            <br />
            <a
              href={`mailto:${operatorEmail}`}
              className="inline-flex items-center gap-2 text-cream/90 hover:text-accent"
            >
              <Mail size={16} /> {operatorEmail}
            </a>
            <br />
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Brulo+3%2C+52440+Pore%C4%8D%2C+Croatia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cream/90 hover:text-accent"
            >
              <MapPin size={16} /> {tContact("address")}
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {t("company")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-accent">{tNav("home")}</Link></li>
            <li><Link href="/tours" className="hover:text-accent">{tNav("tours")}</Link></li>
            <li><Link href="/about" className="hover:text-accent">{tNav("about")}</Link></li>
            <li><Link href="/faq" className="hover:text-accent">{tNav("faq")}</Link></li>
            <li><Link href="/contact" className="hover:text-accent">{tNav("contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {t("legal")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-accent">AGB</Link></li>
            <li><Link href="/cancellation" className="hover:text-accent">Cancellation</Link></li>
            <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link href="/imprint" className="hover:text-accent">Imprint</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-cream/60 md:flex-row">
          <span>© {year} Bachitours. {t("rights")}</span>
          <span>Poreč · Istria · Croatia</span>
        </div>
      </div>
    </footer>
  );
}
