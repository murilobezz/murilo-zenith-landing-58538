import { Award, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Conheça o <span className="text-gradient-gold">Dr. Murilo Bezerra</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto" />
          </div>
          
          <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-lg text-card-foreground leading-relaxed">
                Médico com foco em Nutrologia, especializado em <span className="text-gold font-semibold">saúde, performance e longevidade</span>. 
                Protocolo individualizado para emagrecimento, disposição e equilíbrio metabólico.
              </p>
              
              <p className="text-card-foreground/80 leading-relaxed">
                A nutrologia vai além da alimentação: é sobre entender seu corpo de forma completa, 
                identificar desequilíbrios e criar estratégias personalizadas para você alcançar seus objetivos 
                com saúde e sustentabilidade.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Registro Profissional</h3>
                    <p className="text-sm text-muted-foreground">CRM 520128795-8</p>
                    <p className="text-sm text-muted-foreground">Nutrologia</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-card-foreground">Especialização</h3>
                    <p className="text-sm text-muted-foreground">Nutrologia Clínica</p>
                    <p className="text-sm text-muted-foreground">Performance & Longevidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};