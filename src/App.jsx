import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import WhatsAppIcon from "./components/WhatsAppIcon";

function App() {
  return (
    <main className="font-sans bg-white text-gray-800">
      <HeroSection />
      <FeaturesSection />
      <InfoSection />
      <ServicesSection />
      <ContactSection />
      <WhatsAppIcon />
      <Footer />
    </main>
  );
}

export default App;
