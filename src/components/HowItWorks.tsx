import { MessageCircle, Calendar, FileCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Entre em contato",
    description: "Clique no botão de agendamento e envie uma mensagem pelo WhatsApp"
  },
  {
    icon: Calendar,
    title: "2. Escolha o formato",
    description: "Opte por atendimento presencial (Nilópolis, Nova Iguaçu ou Botafogo) ou online"
  },
  {
    icon: FileCheck,
    title: "3. Receba seu protocolo",
    description: "Após avaliação completa, você recebe um plano personalizado e acompanhamento contínuo"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Como <span className="text-gradient-gold">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente para você começar sua jornada
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 h-full shadow-sm hover:shadow-gold transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-center text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gold/50 to-transparent -translate-x-4" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};