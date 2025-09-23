import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CompanySection } from "@/components/CompanySection";
import { ServicesSection } from "@/components/ServicesSection";
import { CoatingSection } from "@/components/CoatingSection";
import { WebshopSection } from "@/components/WebshopSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <HeroSection />
        <CompanySection />
        <ServicesSection />
        <CoatingSection />
        <WebshopSection />
        <YouTubeSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;