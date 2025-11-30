import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import RegistrationForms from "@/components/RegistrationForms";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <RegistrationForms />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
