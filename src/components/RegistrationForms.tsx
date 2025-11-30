import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForms = () => {
  const { toast } = useToast();

  // FORM 1 — Serviço
  const [serviceForm, setServiceForm] = useState({
    name: "",
    phone: "",
    location: "",
    message: ""
  });

  // FORM 2 — Prestador
  const [providerForm, setProviderForm] = useState({
    name: "",
    phone: "",
    area: "",
    message: ""
  });

  const validateForm = (fields: Record<string, string>) => {
    for (const [, value] of Object.entries(fields)) {
      if (!value.trim()) {
        toast({
          variant: "destructive",
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos.",
        });
        return false;
      }
    }
    return true;
  };

  const sendToWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5512996282711?text=${encodedMessage}`, "_blank");
  };

  // SUBMIT — Serviço
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(serviceForm)) return;

    const message = `Olá, preciso de um serviço.

Nome: ${serviceForm.name}
Telefone: ${serviceForm.phone}
Localização: ${serviceForm.location}
Mensagem: ${serviceForm.message}`;

    sendToWhatsApp(message);

    setServiceForm({
      name: "",
      phone: "",
      location: "",
      message: ""
    });
  };

  // SUBMIT — Prestador
  const handleProviderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(providerForm)) return;

    const message = `Olá, quero ser um prestador.

Nome: ${providerForm.name}
Telefone: ${providerForm.phone}
Área de Atuação: ${providerForm.area}
Mensagem: ${providerForm.message}`;

    sendToWhatsApp(message);

    setProviderForm({ name: "", phone: "", area: "", message: "" });
  };

  return (
    <section id="cadastros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Cadastros
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha a opção que melhor atende sua necessidade
          </p>
        </div>

        {/* Agora só 2 cards — alinhados em 1 coluna no mobile e 2 no PC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* FORM 1 — Serviço */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Quero um Serviço</CardTitle>
              <CardDescription>
                Solicite um profissional qualificado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleServiceSubmit} className="space-y-4">

                <Input
                  placeholder="Nome"
                  value={serviceForm.name}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, name: e.target.value })
                  }
                  required
                />

                <Input
                  placeholder="Telefone"
                  type="tel"
                  value={serviceForm.phone}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, phone: e.target.value })
                  }
                  required
                />

                <Input
                  placeholder="Localização (bairro, rua...)"
                  value={serviceForm.location}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, location: e.target.value })
                  }
                  required
                />

                <Textarea
                  placeholder="Olá, preciso de um serviço. O que você precisa?"
                  value={serviceForm.message}
                  onChange={(e) =>
                    setServiceForm({ ...serviceForm, message: e.target.value })
                  }
                  rows={4}
                  required
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <MessageCircle className="mr-2" size={20} />
                  Enviar para WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* FORM 2 — Prestador */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Quero ser um Prestador</CardTitle>
              <CardDescription>
                Cadastre-se como profissional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProviderSubmit} className="space-y-4">

                <Input
                  placeholder="Nome"
                  value={providerForm.name}
                  onChange={(e) => setProviderForm({ ...providerForm, name: e.target.value })}
                  required
                />

                <Input
                  placeholder="Telefone"
                  type="tel"
                  value={providerForm.phone}
                  onChange={(e) => setProviderForm({ ...providerForm, phone: e.target.value })}
                  required
                />

                <Input
                  placeholder="Área de Atuação"
                  value={providerForm.area}
                  onChange={(e) => setProviderForm({ ...providerForm, area: e.target.value })}
                  required
                />

                <Textarea
                  placeholder="Olá, quero ser um prestador"
                  value={providerForm.message}
                  onChange={(e) => setProviderForm({ ...providerForm, message: e.target.value })}
                  rows={4}
                  required
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <MessageCircle className="mr-2" size={20} />
                  Enviar para WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default RegistrationForms;
