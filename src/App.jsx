import { Link } from "react-router-dom";
export default function LicenciaShopLanding() {
const products = [
  {
    name: 'Windows 11 Pro',
    price: '$349 MXN',
    desc: 'Licencia digital original + soporte por WhatsApp',
    image: '/products/win11.png'
  },

  {
    name: 'Office 2021 Pro Plus',
    price: '$399 MXN',
    desc: 'Activación rápida y ayuda remota opcional',
    image: '/products/Office2021.png'
  },

  {
    name: 'Office 2024 Pro Plus',
    price: '$499 MXN',
    desc: 'Compatible con Windows 10 y 11',
      image: '/products/Office2024.png'

  }
];

  const services = [
    'Instalación remota',
    'Activación rápida',
    'Soporte por WhatsApp',
    'Optimización de PC',
    'Formateo y respaldo',
    'Asistencia para empresas'
  ];

  const phone = '522218288063';

const getWhatsAppLink = (product) => {
  const message = `Hola, vi ${product.name} en LicenciaShop y me interesa adquirirlo.

Producto: ${product.name}
Precio: ${product.price}

¿Me puedes dar más información?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.ico"
              alt="LicenciaShop"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">LicenciaShop</h1>

              <p className="text-sm text-zinc-400">
                Licencias y soporte técnico
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-green-400 transition"
            >
              Inicio
            </Link>

            <Link
              to="/preguntas-frecuentes"
              className="hover:text-green-400 transition"
            >
              FAQ
            </Link>


            <Link
              to="/contacto"
              className="hover:text-green-400 transition"
            >
              Contacto
            </Link>

            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                'Hola, quiero información sobre licencias y soporte técnico.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-400 transition px-5 py-2 rounded-2xl font-semibold"
            >
              WhatsApp
            </a>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
            Instalación remota disponible
          </span>

          <h2 className="text-5xl font-black mt-6 leading-tight">
            Office y Windows listos para usar
          </h2>

          <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
            Activaciones rápidas, soporte técnico y ayuda remota para dejar tu PC lista para trabajar, estudiar o tu negocio.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                'Hola, quiero información sobre sus licencias y soporte técnico.'
              )}`}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
            >
              Comprar ahora
            </a>

            <a
              href="#productos"
              className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >
              Ver productos
            </a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
          <div className="space-y-4">
            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="font-bold text-lg">✔ Office Original</h3>
              <p className="text-zinc-400 mt-2">Word, Excel, PowerPoint y más.</p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="font-bold text-lg">✔ Activación rápida</h3>
              <p className="text-zinc-400 mt-2">Entrega inmediata y soporte.</p>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-5">
              <h3 className="font-bold text-lg">✔ Instalación remota</h3>
              <p className="text-zinc-400 mt-2">Sin salir de casa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">Productos y paquetes</h2>
          <p className="text-zinc-400 mt-4">
            Soluciones rápidas para estudiantes, oficinas y negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex flex-col hover:-translate-y-2 hover:border-zinc-600 transition duration-300 shadow-2xl"
            >
              <img
              hover:scale-105 transition duration-300
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-6 hover:scale-105 transition duration-300"
              />

              <h3 className="text-2xl font-bold">{product.name}</h3>

              <p className="text-4xl font-black mt-5">{product.price}</p>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {product.desc}
              </p>

              <a
                href={getWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-black rounded-2xl py-3 mt-auto font-bold hover:opacity-90 transition"
              >
                Pedir ahora
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight">
              Más que licencias
            </h2>

            <p className="text-zinc-400 text-lg mt-6 leading-relaxed">
              También ofrecemos soporte técnico, optimización y asistencia remota para dejar tu equipo funcionando correctamente.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5"
              >
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">
            Clientes satisfechos
          </h2>

          <p className="text-zinc-400 mt-4">
            Atención rápida y soporte personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              name: "Carlos M.",
              city: "Puebla",
              text: "Muy rápido y sin problemas. Todo quedó funcionando perfecto."
            },

            {
              name: "Andrea R.",
              city: "Cholula",
              text: "Excelente atención y soporte remoto muy rápido."
            },

            {
              name: "Luis G.",
              city: "Puebla",
              text: "Me instalaron Office en minutos y quedó activado correctamente."
            }

          ].map((item, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7"
            >

              <p className="text-zinc-300 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-6">
                <p className="font-bold">
                  {item.name}
                </p>

                <p className="text-zinc-500 text-sm">
                  {item.city}
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">
            Preguntas frecuentes
          </h2>

          <p className="text-zinc-400 mt-4">
            Resolvemos tus dudas antes de comprar.
          </p>
        </div>

        <div className="space-y-5">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Las licencias son originales?
            </h3>

            <p className="text-zinc-400 mt-3">
              Sí, son licencias digitales funcionales y con soporte.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Hacen instalación remota?
            </h3>

            <p className="text-zinc-400 mt-3">
              Sí, podemos ayudarte remotamente mediante AnyDesk o TeamViewer.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold">
              ¿Cuánto tarda la entrega?
            </h3>

            <p className="text-zinc-400 mt-3">
              La mayoría de entregas son inmediatas o en pocos minutos.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white text-black rounded-[2rem] p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-black leading-tight">
            ¿Necesitas Office o Windows hoy?
          </h2>

          <p className="mt-5 text-lg text-zinc-700">
            Contáctanos por WhatsApp y recibe atención rápida.
          </p>

          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              'Hola, quiero información sobre Office, Windows y soporte técnico.'
            )}`}
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Ir a WhatsApp
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
 