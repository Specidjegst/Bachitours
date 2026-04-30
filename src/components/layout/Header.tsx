import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MessageCircle } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tHero = useTranslations("hero");
  const waUrl = operatorWaUrl(tHero("ctaSecondary"));

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/tours" className="text-sm font-medium text-ink hover:text-primary">
            {t("tours")}
          </Link>
          <Link href="/about" className="text-sm font-medium text-ink hover:text-primary">
            {t("about")}
          </Link>
          <Link href="/faq" className="text-sm font-medium text-ink hover:text-primary">
            {t("faq")}
          </Link>
          <Link href="/contact" className="text-sm font-medium text-ink hover:text-primary">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-success px-4 py-2 text-sm font-medium text-white hover:brightness-105"
          >
            <MessageCircle size={16} />
            {tCommon("whatsappShort")}
          </a>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-sun px-4 py-2 text-sm font-semibold text-white shadow-card hover:-translate-y-0.5 hover:shadow-cardHover transition-all"
          >
            {t("book")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
