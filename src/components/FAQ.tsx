import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As consultas podem ser online?",
    answer: "Sim! Oferecemos consultas por telemedicina para pacientes de todo o Brasil. O atendimento online mantém a mesma qualidade e atenção do presencial, com avaliação completa e protocolo personalizado."
  },
  {
    question: "É possível acompanhamento para performance esportiva?",
    answer: "Sim, trabalhamos com protocolos personalizados para otimização de performance física e mental. Seja você atleta ou praticante de exercícios, criamos estratégias nutricionais específicas para seus objetivos."
  },
  {
    question: "Preciso de exames antes da consulta?",
    answer: "Não é necessário. Os exames são solicitados após a avaliação inicial, quando o médico já conhece seu histórico e seus objetivos. Assim, pedimos apenas o que é realmente necessário para seu caso."
  },
  {
    question: "Quanto tempo dura uma consulta?",
    answer: "A primeira consulta tem duração média de 60 minutos, tempo necessário para uma avaliação completa. As consultas de retorno costumam durar entre 30 e 40 minutos."
  },
  {
    question: "Como funciona o acompanhamento nutricional?",
    answer: "Após a primeira consulta, você recebe seu protocolo personalizado. Os retornos são agendados conforme necessário (geralmente mensais) para ajustes e acompanhamento da evolução. Você também pode entrar em contato sempre que tiver dúvidas."
  },
  {
    question: "Qual a diferença entre nutricionista e nutrólogo?",
    answer: "O nutrólogo é médico especializado em nutrição. Isso significa formação completa em medicina, além da especialização em nutrologia. Podemos prescrever medicamentos, solicitar e interpretar exames laboratoriais complexos, e tratar doenças relacionadas à nutrição e metabolismo."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos diversas formas de pagamento: dinheiro, PIX, cartão de débito e crédito (parcelamento disponível). Para consultas online, o pagamento pode ser feito por PIX ou cartão antes do atendimento."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre o atendimento
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left hover:text-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};