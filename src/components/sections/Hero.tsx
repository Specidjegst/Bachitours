import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, MessageCircle } from "lucide-react";
import { operatorWaUrl } from "@/lib/whatsapp";

export function Hero() {
  const t = useTranslations("hero");
  const tWa = useTranslations("whatsappPrefill");
  const waUrl = operatorWaUrl(tWa("general"));

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=2400&q=85"
          alt="Adriaküste bei Poreč"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/85 via-deep/40 to-transparent" />
      </div>
      <div className="container-x flex min-h-[70vh] flex-col justify-center py-16 text-white sm:py-20 md:min-h-[90vh]">
        <h1 className="h1 max-w-3xl drop-shadow-lg">{t("title")}</h1>
        <p className="lead mt-4 max-w-2xl text-white/95">{t("subtitle")}</p>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <Link href="/tours" className="btn-primary">
            {t("ctaPrimary")} <ArrowRight size={18} />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} /> {t("ctaSecondary")}
          </a>
        </div>
        <p className="mt-8 text-sm font-medium text-white/90">{t("trust")}</p>
      </div>
    </section>
  );
}
