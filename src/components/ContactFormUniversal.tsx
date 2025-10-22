import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  phone: z.string().trim().min(1, "WhatsApp é obrigatório").max(20, "Número inválido"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo").optional().or(z.literal("")),
  objective: z.string().min(1, "Selecione um objetivo"),
});

export const ContactFormUniversal = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("entry.314527234") as string,
      phone: formData.get("entry.2001774750") as string,
      email: formData.get("entry.1432209541") as string,
      objective: formData.get("entry.647728780") as string,
    };

    try {
      // Validação
      formSchema.parse(data);

      // Envio ao Google Forms
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6jk90urXGcGzehE9yZtHfsOo5y6bVaY5yFDV_-NaQSqTGoQ/formResponse";
      
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Sucesso
      toast({
        title: "Dados enviados com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      // Limpar formulário
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Dados enviados!",
          description: "Entraremos em contato em breve.",
        });
        e.currentTarget.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Deixe seus dados</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto text-left"
        >
          {/* Nome */}
          <div>
            <label className="block text-sm mb-1">Nome*</label>
            <input
              type="text"
              name="entry.314527234"
              placeholder="Seu nome"
              required
              autoComplete="name"
              className="w-full border rounded p-2"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm mb-1">WhatsApp*</label>
            <input
              type="tel"
              name="entry.2001774750"
              placeholder="(21) 97236-6819"
              required
              autoComplete="tel"
              inputMode="tel"
              className="w-full border rounded p-2"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              name="entry.1432209541"
              placeholder="seu@email.com"
              autoComplete="email"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm mb-1">Objetivo*</label>
            <select
              name="entry.647728780"
              required
              className="w-full border rounded p-2"
            >
              <option value="">Selecione...</option>
              <option value="Emagrecimento">Emagrecimento</option>
              <option value="Performance">Performance</option>
              <option value="Bem-estar">Bem-estar</option>
              <option value="Hipertrofia">Hipertrofia</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gold text-black py-2 rounded font-semibold mt-4 disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          Seus dados serão enviados de forma segura e entraremos em contato em breve.
        </p>
      </div>
    </section>
  );
};
