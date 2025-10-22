import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    text: "Recuperei minha energia e perdi peso de forma saudável com o acompanhamento do Dr. Murilo. Finalmente encontrei um médico que se importa de verdade!",
    rating: 5,
    date: "Janeiro 2025"
  },
  {
    name: "Carlos Eduardo M.",
    text: "O protocolo individualizado fez toda a diferença. Melhorei meu desempenho nos treinos e na vida profissional. Recomendo!",
    rating: 5,
    date: "Fevereiro 2025"
  },
  {
    name: "Juliana Oliveira",
    text: "Excelente profissional! Atencioso, explica tudo com clareza e realmente entende do que está fazendo. Minha saúde melhorou muito.",
    rating: 5,
    date: "Março 2025"
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Histórias de <span className="text-gradient-gold">transformação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos pacientes têm a dizer sobre sua jornada de saúde
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-elegant hover:shadow-gold transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
