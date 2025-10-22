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
          target="_blank"
          className="space-y-4 max-w-md mx-auto"
        >
          {/* Nome */}
          <input
            type="text"
            name="entry.314527234"
            placeholder="Nome"
            required
            className="w-full border rounded p-2"
          />

          {/* WhatsApp */}
          <input
            type="text"
            name="entry.2001774750"
            placeholder="WhatsApp"
            required
            className="w-full border rounded p-2"
          />

          {/* E-mail */}
          <input
            type="email"
            name="entry.1432209541"
            placeholder="E-mail"
            className="w-full border rounded p-2"
          />

          {/* Objetivo */}
          <select
            name="entry.647728780"
            className="w-full border rounded p-2"
          >
            <option value="Emagrecimento">Emagrecimento</option>
            <option value="Performance">Performance</option>
            <option value="Bem-estar">Bem-estar</option>
            <option value="Hipertrofia">Hipertrofia</option>
            <option value="Outro">Outro</option>
          </select>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-gold text-black py-2 rounded font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
