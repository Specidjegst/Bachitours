import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";

export default async function ThanksPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ref?: string; tour?: string; date?: string; guests?: string; wa?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sp = await searchParams;
  const t = await getTranslations({ locale, namespace: "thanks" });

  return (
    <div className="bg-cream">
      <div className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-2xl rounded-xl2 bg-white p-8 text-center shadow-card md:p-12">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
            <CheckCircle2 size={36} />
          </div>
          <h1 className="h2 mb-4 text-deep">{t("title")}</h1>
          <p className="lead mb-6">{t("text")}</p>
          {sp.ref && (
            <div className="mb-6 inline-block rounded-full bg-cream px-5 py-2 text-sm font-mono font-semibold text-deep">
              {t("reference")}: {sp.ref}
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            {sp.wa && (
              <a href={sp.wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={18} /> {t("openWhatsapp")}
              </a>
            )}
            <Link href="/" className="btn-ghost">
              <ArrowLeft size={18} /> {t("backHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
