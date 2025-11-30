import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import logo from "@/assets/logo.png";

const Hero = React.memo(() => {
  const openWhatsApp = () => {
    setTimeout(() => {
      window.open("https://wa.me/5512996282711", "_blank");
    }, 10);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary pt-16"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <OptimizedImage
              src={logo}
              alt="Beak Logo"
              className="h-64 md:h-80 lg:h-96 w-auto max-w-full"
            />
          </div>

          {/* Novo título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Os melhores profissionais da sua região, onde e quando você precisar.
          </h1>

          {/* Novo subtítulo */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Encontre serviços e profissionais de confiança de forma rápida, prática e com a qualidade que você merece.
          </p>

          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-transform duration-200 active:scale-95"
          >
            <MessageCircle className="mr-2" size={24} />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
});

export default Hero;

