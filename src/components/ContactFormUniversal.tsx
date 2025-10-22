export const ContactFormUniversal = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Deixe seus dados</h2>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd6jk90urXGcGzehE9yZtHfsOo5y6bVaY5yFDV_-NaQSqTGoQ/formResponse"
          method="POST"
          target="_self"        // mantém para ver a confirmação do Google
          className="space-y-4 max-w-md mx-auto text-left"
        >
          {/* Nome */}
          <label className="block text-sm mb-1">Nome*</label>
          <input
            type="text"
            name="entry.314527234"
            placeholder="Seu nome"
            required
            autoComplete="name"
            className="w-full border rounded p-2"
          />

          {/* WhatsApp */}
          <label className="block text-sm mb-1 mt-3">WhatsApp*</label>
          <input
            type="tel"
            name="entry.2001774750"
            placeholder="(21) 97236-6819"
            required
            autoComplete="tel"
            inputMode="tel"
            className="w-full border rounded p-2"
          />

          {/* E-mail */}
          <label className="block text-sm mb-1 mt-3">E-mail</label>
          <input
            type="email"
            name="entry.1432209541"
            placeholder="seu@email.com"
            autoComplete="email"
            className="w-full border rounded p-2"
          />

          {/* Objetivo */}
          <label className="block text-sm mb-1 mt-3">Objetivo*</label>
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

          {/* (Opcional) Hidden para compatibilidade com Forms */}
          <input type="hidden" name="submit" value="Submit" />

          <button type="submit" className="w-full bg-gold text-black py-2 rounded font-semibold mt-4">
            Enviar
          </button>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          Ao enviar, você verá a confirmação do Google Forms.
        </p>
      </div>
    </section>
  );
};
