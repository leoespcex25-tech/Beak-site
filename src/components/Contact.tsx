import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5512996282711", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Contato
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Entre em contato diretamente pelo WhatsApp:
          </p>
          
          <div className="bg-secondary rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="text-accent" size={32} />
              <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                +55 12 99628-2711
              </span>
            </div>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="mr-2" size={24} />
              Abrir WhatsApp
            </Button>
          </div>

          <p className="text-primary-foreground/80">
            Estamos prontos para atender você!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
