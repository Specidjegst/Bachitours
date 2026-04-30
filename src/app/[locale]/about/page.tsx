import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  return (
    <div className="container-x py-16 md:py-24 max-w-3xl">
      <h1 className="h1 mb-6 text-deep">{t("title")}</h1>
      <p className="lead mb-6">{t("lead")}</p>
      <p className="text-ink leading-relaxed">{t("body")}</p>
    </div>
  );
}
