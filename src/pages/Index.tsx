import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ModelsSection from '@/components/ModelsSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ModelsSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
