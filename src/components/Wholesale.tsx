import { ArrowRight, Truck as TruckIcon, BarChart3, Headphones as HeadphonesIcon, Boxes } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const benefits = [
  { icon: Boxes, label: 'Stock disponible', desc: 'Línea completa disponible todo el año' },
  { icon: TruckIcon, label: 'Envíos a todo el país', desc: 'Despacho rápido y seguro' },
  { icon: BarChart3, label: 'Márgenes atractivos', desc: 'Precios mayoristas competitivos' },
  { icon: HeadphonesIcon, label: 'Soporte y acompañamiento', desc: 'Atención personalizada permanente' },
];

export default function Wholesale() {
  const ref = useReveal();

  return (
    <section id="mayoristas" className="relative bg-brand-black-soft overflow-hidden py-28 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-terracotta/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="reveal text-brand-terracotta text-xs tracking-[0.35em] uppercase font-medium mb-6">
              Canal Mayorista
            </p>
            <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-8" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.5rem)' }}>
              <span className="text-brand-off-white block">Vendé Voodoo</span>
              <span className="text-brand-sand block">en tu negocio</span>
            </h2>
            <p className="reveal reveal-d2 text-brand-sand/60 text-base leading-loose max-w-md mb-10">
              Sumá una marca con identidad real a tu oferta. VOODOO tiene presencia en todo el país y una comunidad creciente que la busca. El respaldo de 15 años de reputación habla solo.
            </p>
            <div className="reveal reveal-d3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-brand-terracotta hover:bg-brand-terracotta-light text-white font-semibold text-sm tracking-widest uppercase px-10 py-4 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                Quiero Vender Voodoo
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="reveal reveal-d2 grid grid-cols-2 gap-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="bg-brand-black/50 border border-white/5 p-7 hover:border-brand-sand/20 transition-all duration-300"
                >
                  <Icon size={20} className="text-brand-terracotta mb-5" />
                  <h4 className="text-brand-off-white font-semibold text-sm mb-1.5">{b.label}</h4>
                  <p className="text-brand-sand/50 text-xs leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
