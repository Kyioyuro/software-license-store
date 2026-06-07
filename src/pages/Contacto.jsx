import { Link } from "react-router-dom";

export default function Contacto() {
  const phone = "522218288063";

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/favicon.ico"
              alt="LicenciaShop"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold">
                LicenciaShop
              </h1>

              <p className="text-sm text-zinc-400">
                Licencias y soporte técnico
              </p>
            </div>
          </Link>

        </div>
      </header>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black mb-6">
          Contacto
        </h2>

        <p className="text-zinc-400 text-lg mb-10">
          Estamos listos para ayudarte con licencias,
          instalación remota y soporte técnico.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            Atención por WhatsApp
          </h3>

          <p className="text-zinc-400 mb-6">
            Horario de atención:
            <br />
            Lunes a Domingo
            <br />
            9:00 AM - 10:00 PM
          </p>

          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 px-6 py-3 rounded-2xl font-bold"
          >
            Abrir WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 LicenciaShop - Puebla, México
      </footer>

    </div>
  );
}