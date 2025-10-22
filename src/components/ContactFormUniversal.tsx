export const ContactFormUniversal = () => {
  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Deixe seus dados
        </h2>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd6jk90urXGcGzehE9yZtHfsOo5y6bVaY5yFDV_-NaQSqTGoQ/formResponse"
          method="POST"
          target="_self"
          className="space-y-4 max-w-md mx-auto text-left"
        >
          {/* Nome Completo */}
          <label className="block text-sm mb-1">Nome Completo*</label>
          <input
            type="text"
            name="entry.2068883942"
            placeholder="Seu nome completo"
            required
            autoComplete="name"
            className="w-full border rounded p-2"
          />

          {/* Número/WhatsApp */}
          <label className="block text-sm mb-1 mt-3">Número (WhatsApp / Telefone)*</label>
          <input
            type="tel"
            name="entry.1028530885"
            placeholder="(21) 9 7236-6819"
            required
            autoComplete="tel"
            inputMode="tel"
            className="w-full border rounded p-2"
          />

          {/* E-mail Pessoal (opcional) */}
          <label className="block text-sm mb-1 mt-3">E-mail Pessoal</label>
          <input
            type="email"
            name="entry.935385237"
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

          {/* Compatibilidade extra com Forms */}
          <input type="hidden" name="submit" value="Submit" />

          {/* Botão Enviar */}
          <button
            type="submit"
            className="w-full bg-gold text-black py-2 rounded font-semibold mt-4"
          >
            Enviar
          </button>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          Ao enviar, o Google Forms exibirá "Sua resposta foi registrada".
        </p>
      </div>
    </section>
  );
};
