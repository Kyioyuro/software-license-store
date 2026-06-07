import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">

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
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-5">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Las licencias son originales?
            </h3>

            <p className="text-zinc-400 mt-3">
              Sí, todas las licencias son funcionales y cuentan con soporte.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Cuánto tarda la entrega?
            </h3>

            <p className="text-zinc-400 mt-3">
              Generalmente la entrega es inmediata o en pocos minutos.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Ofrecen instalación remota?
            </h3>

            <p className="text-zinc-400 mt-3">
              Sí, podemos ayudarte mediante AnyDesk o TeamViewer.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        © 2026 LicenciaShop - Puebla, México
      </footer>

    </div>
  );
}