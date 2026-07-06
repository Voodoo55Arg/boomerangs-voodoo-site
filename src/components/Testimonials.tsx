import { Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const metrics = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '14', label: 'Provincias' },
  { value: '3', label: 'Países' },
  { value: '100%', label: 'Fabricación Argentina' },
];

const testimonials = [
  {
    store: 'Loading Hobbies',
    city: 'CABA',
    quote:
      'Desde hace cuatro años que Voodoo forma parte de nuestro negocio. Alta calidad, excelente comunicación y un trato justo los identifican. Estamos muy contentos con la relación comercial y personal que establecimos. Un proveedor de lujo.',
    author: 'Ariel N.',
    image: '/testimonio-loading.JPG',
  },
  {
    store: 'Florida Camping',
    city: 'Vicente López',
    quote:
      'Somos clientes de Voodoo desde el año 2013. Hemos visto cómo fue mejorando e innovando constantemente. Nuestra relación con la marca y Miguel, después de más de 10 años, está por encima de lo comercial. Seguimos confiando y trabajando juntos.',
    author: 'Diego B.',
    image: '/testimonio-florida.JPG',
  },
  {
    store: 'Juguetería Cantepri',
    city: 'San Carlos de Bariloche',
    quote:
      'Trabajamos junto a Voodoo y Miguel hace años y siempre fue una experiencia genial. Tanto por la calidad del producto como por la atención recibida. Gracias por tantos años compartidos.',
    author: 'Andrea P.',
    image: '/testimonio-cantepri.JPG',
    imagePosition: 'object-top',
  },
  {
    store: 'De Tal Palo',
    city: 'Salta',
    quote:
      'Sumamos Voodoo hace varios años con un excelente rendimiento. Los productos son geniales y de excelente manufactura. Nuestros clientes felices con el producto. Confiabilidad 100%.',
    author: 'Cris Z.',
    image: '/testimonio-detalpalo.JPG',
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="bg-brand-black py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Testimonios
          </p>
          <h2
            className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            <span className="text-brand-off-white">Lo que dicen</span>
            <span className="text-brand-sand block">nuestros clientes</span>
          </h2>
          <p className="reveal reveal-d2 text-brand-sand/50 text-base leading-relaxed max-w-xl">
            Más de 15 años construyendo relaciones comerciales duraderas con jugueterías, tiendas outdoor y distribuidores de todo el país.
          </p>
        </div>

        {/* Metrics */}
        <div className="reveal reveal-d3 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="bg-brand-black p-8 md:p-10 text-center">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-brand-sand uppercase mb-2 leading-none tracking-tight">
                {m.value}
              </div>
              <div className="text-brand-sand/40 text-[10px] tracking-[0.25em] uppercase leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.store}
              className={`reveal reveal-d${Math.min(i + 1, 4)} group bg-[#111111] border border-white/5 hover:border-brand-sand/20 transition-all duration-300`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={t.image}
                  alt={`${t.store} — ${t.city}`}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${t.imagePosition ?? 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/10 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-brand-sand/80 bg-brand-black/70 px-2.5 py-1 backdrop-blur-sm">
                    {t.city}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start gap-3 mb-5">
                  <Quote size={16} className="text-brand-sand/25 flex-shrink-0 mt-1" />
                  <p className="text-brand-sand/70 text-sm leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <p className="text-brand-off-white font-semibold text-sm tracking-wider uppercase">
                      {t.store}
                    </p>
                    <p className="text-brand-sand/40 text-xs tracking-wider mt-0.5">{t.author}</p>
                  </div>
                  <div className="w-8 h-px bg-brand-sand/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
