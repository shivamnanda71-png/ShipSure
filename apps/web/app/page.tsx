import React from "react";
import  HeroSection  from "@/pages/HeroSection/herosection";
import  FeaturesSection  from "@/pages/FeaturesSection/features";
import IntegrateSection from "@/pages/IntergrateSection/integrate";
import  CTASection  from "@/pages/CTASection/cta";
import AIIntegration from "@/pages/AIFeaturesSection/aifeature";
import  FAQSection  from "@/pages/FAQSection/faq";

function Page() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section>
        <CTASection />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <IntegrateSection />
      </section>
      <section>
        <AIIntegration />
      </section>
      <section>
        <FAQSection />
      </section>
    </main>
  );
}

export default Page;
