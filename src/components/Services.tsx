import { memo } from "react";
import { Zap, Droplet, Hammer, Snowflake, Settings, Wrench, MoreHorizontal } from "lucide-react";

// Array de serviços, memoizado fora do componente para não recriar em re-renders
const services = [
  { icon: Zap, label: "Eletricista", color: "text-primary-foreground" },
  { icon: Droplet, label: "Encanador", color: "text-primary-foreground" },
  { icon: Hammer, label: "Pedreiro", color: "text-primary-foreground" },
  { icon: Snowflake, label: "Refrigeração", color: "text-primary-foreground" },
  { icon: Settings, label: "Instalação", color: "text-primary-foreground" },
  { icon: Wrench, label: "Manutenção Geral", color: "text-primary-foreground" },
  { icon: MoreHorizontal, label: "Outros Serviços", color: "text-primary-foreground" },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 sm:py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Tipos de Serviços
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg">
            Profissionais qualificados para todas as suas necessidades
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-full sm:max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 text-center transition-all hover:bg-secondary/80 hover:scale-105 hover:shadow-lg will-change-transform"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4 transition-colors group-hover:bg-primary-foreground/20">
                  <Icon className={`${service.color} transition-transform`} size={32} />
                </div>
                <h3 className="text-primary-foreground font-semibold text-lg">
                  {service.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// memo evita re-renderizações desnecessárias
export default memo(Services);
