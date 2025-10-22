export const ContactFormUniversal = () => {
  return (
    <section id="contato" className="relative z-10 py-24 bg-primary overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Quero cuidar da minha saúde agora
        </h2>
        <p className="text-primary-foreground/80 mb-10">
          Preencha seus dados e entraremos em contato.
        </p>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd6jk90urXGcGzehE9yZtHfsOo5y6bVaY5yFDV_-NaQSqTGoQ/formResponse"
          method="POST"
          target="_self"  // mantém para exibir “Sua resposta foi registrada”
          className="space-y-5 text-left bg-card p-8 rounded-2xl shadow-elegant"
        >
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium mb-1 text-primary">Nome*</label>
            <input
              type="text"
              name="entry.314527234"   // ID real do campo Nome
              required
              autoComplete="name"
              className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Seu nome"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium mb-1 text-primary">WhatsApp*</label>
            <input
              type="tel"
              name="entry.2001774750"   // ID real do campo WhatsApp
              required
              autoComplete="tel"
              inputMode="tel"
              className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="(21) 97236-6819"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block text-sm font-medium mb-1 text-primary">E-mail</label>
            <input
              type="email"
              name="entry.1432209541"   // ID real do campo E-mail
              autoComplete="email"
              className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="seu@email.com"
            />
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm font-medium mb-1 text-primary">Objetivo*</label>
            <select
              name="entry.647728780"    // ID real do campo Objetivo
              required
              className="w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Selecione...</option>
              <option value="Emagrecimento">Emagrecimento</option>
              <option value="Performance">Performance</option>
              <option value="Bem-estar">Bem-estar</option>
              <option value="Hipertrofia">Hipertrofia</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Compatibilidade extra com o Forms */}
          <input type="hidden" name="submit" value="Submit" />

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-gold text-black py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
          >
            Enviar
          </button>
        </form>

        <p className="text-xs text-primary-foreground/60 mt-6">
          Ao enviar, o Google Forms exibirá a confirmação “Sua resposta foi registrada”.
        </p>
      </div>
    </section>
  );
};
