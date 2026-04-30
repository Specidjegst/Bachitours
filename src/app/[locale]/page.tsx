import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PopularTours } from "@/components/sections/PopularTours";
import { WhyBook } from "@/components/sections/WhyBook";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reviews } from "@/components/sections/Reviews";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ContactCta } from "@/components/sections/ContactCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <TrustBar />
      <PopularTours />
      <WhyBook />
      <HowItWorks />
      <Reviews />
      <FaqAccordion limit={4} />
      <ContactCta />
    </>
  );
}
