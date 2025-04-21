import OurService from "../components/Service/OurService";
import OurWorkGallery from "../components/Service/OurWorkGallery";
import ServiceHero from "../components/Service/ServiceHero";
import ServicePricing from "../components/Service/ServicePricing";
import Testimonials from "../components/Service/Testimonials";
import WebsiteDesignExamples from "../components/Service/WebsiteDesignExamples";
import WebsiteProcessSection from "../components/Service/WebsiteProcessSection";
export default function ServicePage() {
  return (
    <div>
      <ServiceHero />
      <OurWorkGallery />
      <OurService />
      <WebsiteProcessSection />
      <WebsiteDesignExamples />
      <ServicePricing />
      <Testimonials />
    </div>
  );
}
