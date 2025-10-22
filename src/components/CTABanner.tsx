import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            Cuidar da saúde hoje é investir no futuro que você merece viver
          </h2>
          
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Dê o primeiro passo para uma vida mais saudável, equilibrada e com mais energia
          </p>
          
          <Button 
            variant="default" 
            size="xl"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant"
          >
            <a 
              href="https://wa.me/5521972366819?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Murilo%20Bezerra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Quero agendar minha consulta agora
            </a>
          </Button>
          
          <p className="text-sm text-primary/60">
            Resposta rápida • Agendamento facilitado • Atendimento humanizado
          </p>
        </div>
      </div>
    </section>
  );
};
