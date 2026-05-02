"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MessageCircle, Menu, X } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

export function Header() {
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const tWa = useTranslations("whatsappPrefill");
  const waUrl = operatorWaUrl(tWa("general"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-2 md:h-20 md:gap-4">
        <Link href="/" className="shrink-0" aria-label="Bachitours">
          <span className="sm:hidden">
            <Logo variant="compact" />
          </span>
          <span className="hidden sm:inline-flex">
            <Logo />
          </span>
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
          <div className="hidden md:block">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-success px-4 py-2 text-sm font-medium text-white hover:brightness-105"
            >
              <MessageCircle size={16} />
              {tCommon("whatsappShort")}
            </a>
          </div>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-full bg-sun px-3 py-2 text-xs font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover sm:px-4 sm:text-sm"
          >
            {t("book")}
          </Link>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-deep md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="border-t border-line bg-cream">
            <nav className="container-x flex flex-col gap-1 py-4">
              <Link
                href="/tours"
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {t("tours")}
              </Link>
              <Link
                href="/about"
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {t("about")}
              </Link>
              <Link
                href="/faq"
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {t("faq")}
              </Link>
              <Link
                href="/contact"
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
              >
                {t("contact")}
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-medium text-white"
              >
                <MessageCircle size={18} /> {tCommon("whatsappShort")}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
