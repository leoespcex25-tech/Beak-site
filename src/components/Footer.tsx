import { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 sm:py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground text-sm sm:text-base">
          © 2025 Beak — Conectando você aos melhores profissionais.
        </p>
      </div>
    </footer>
  );
};

// memo evita re-renderizações desnecessárias
export default memo(Footer);
