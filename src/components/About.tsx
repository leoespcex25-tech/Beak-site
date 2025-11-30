const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Sobre o Beak
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              O <span className="font-semibold text-primary">Beak</span> é a
              plataforma que conecta clientes a profissionais qualificados nas
              mais diversas áreas de serviços manuais.
            </p>

            <p>
              Eletricistas, encanadores, pedreiros, técnicos em refrigeração,
              instaladores e muito mais — todos disponíveis para atender suas
              necessidades.
            </p>

            <p className="font-semibold text-primary">
              Simples, prático e rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
