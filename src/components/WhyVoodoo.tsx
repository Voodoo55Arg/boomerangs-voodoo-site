import { useReveal } from '../hooks/useReveal';
import { Award, MapPin, Package, Clock } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Fabricación Argentina',
    description: 'Cada boomerang es diseñado y fabricado en Argentina. Calidad nacional con estándares internacionales.',
  },
  {
    icon: Award,
    title: 'Diseño Propio',
    description: 'Modelos originales desarrollados en base a años de pruebas, experiencia de campo y feedback real.',
  },
  {
    icon: Package,
    title: 'Stock Permanente',
    description: 'Disponibilidad garantizada durante todo el año. Sin demoras, sin faltantes inesperados.',
  },
  {
    icon: Clock,
    title: '+15 Años de Reputación',
    description: 'Desde 2008 construimos confianza. Miles de boomerangs en el aire hablan por nosotros.',
  },
];

export default function WhyVoodoo() {
  const ref = useReveal();

  return (
    <section className="bg-brand-beige-warm py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="reveal text-brand-terracotta text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Por qué elegirnos
          </p>
          <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none text-brand-black" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            Por qué elegir
            <span className="block text-brand-terracotta"> Voodoo</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-black/10">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`reveal reveal-d${i + 1} bg-brand-beige-warm hover:bg-brand-sand-light transition-colors duration-300 p-10`}
              >
                <div className="w-12 h-12 bg-brand-black/8 flex items-center justify-center mb-7">
                  <Icon size={20} className="text-brand-terracotta" />
                </div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-black mb-4">
                  {r.title}
                </h3>
                <p className="text-brand-black/60 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
