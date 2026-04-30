import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function ImprintPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "imprint" });
  return (
    <div className="container-x py-16 md:py-24 max-w-3xl">
      <h1 className="h1 mb-6 text-deep">{t("title")}</h1>
      <p className="lead">{t("lead")}</p>
      <div className="mt-8 space-y-2 text-sm text-muted">
        <p><strong>Bachitours</strong></p>
        <p>Marina Poreč, 52440 Poreč, Croatia</p>
        <p>WhatsApp: +385 98 935 6521</p>
        <p>Email: info@bachitours.com</p>
      </div>
    </div>
  );
}
