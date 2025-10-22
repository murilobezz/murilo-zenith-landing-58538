import { Scale, Zap, Heart, User, MapPin, FileText } from "lucide-react";

const benefits = [
  {
    icon: Scale,
    title: "Emagrecimento com equilíbrio",
    description: "Perda de peso saudável e sustentável com acompanhamento médico"
  },
  {
    icon: Zap,
    title: "Performance física e mental",
    description: "Melhore disposição, foco e energia para o dia a dia"
  },
  {
    icon: Heart,
    title: "Saúde e longevidade",
    description: "Prevenção e tratamento de doenças metabólicas"
  },
  {
    icon: User,
    title: "Protocolos individualizados",
    description: "Cada paciente recebe um plano personalizado baseado em ciência"
  },
  {
    icon: MapPin,
    title: "Consultas presenciais",
    description: "Atendimento em Nilópolis, Nova Iguaçu e Botafogo"
  },
  {
    icon: FileText,
    title: "Atendimento online",
    description: "Consultas por telemedicina de qualquer lugar do Brasil"
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Por que escolher a <span className="text-gradient-gold">nutrologia?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Benefícios de um acompanhamento médico especializado em nutrição e metabolismo
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};