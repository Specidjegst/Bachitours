import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("how");
  const steps = ["1", "2", "3", "4"] as const;
  return (
    <section className="section">
      <div className="container-x">
        <h2 className="h2 mb-10 text-center text-deep">{t("title")}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s} className="rounded-xl2 bg-white p-6 shadow-card">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun font-bold text-white">
                {i + 1}
              </div>
              <h3 className="mb-1 text-base font-semibold text-deep">
                {t(`steps.${s}.title`)}
              </h3>
              <p className="text-sm text-muted">{t(`steps.${s}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
