import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Frisbees() {
  const ref = useReveal();

  return (
    <section id="frisbees" className="bg-brand-black py-28 md:py-40 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal order-2 lg:order-1 relative">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="/linkfrisbees.jpg"
                alt="Voodoo Frisbees"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black/30 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-6">
              También somos
            </p>
            <div className="reveal reveal-d1 flex items-center gap-6 mb-8">
              <h2 className="font-display font-extrabold uppercase leading-none" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}>
                <span className="text-brand-off-white block">Voodoo</span>
                <span className="text-brand-sand block">Frisbees</span>
              </h2>
              <div className="w-28 h-28 lg:w-32 lg:h-32 flex-shrink-0">
                <img
                  src="/Skull_flux_voodoo.png"
                  alt="Voodoo Skull"
                  className="w-full h-full object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </div>
            <p className="reveal reveal-d2 text-brand-sand/60 text-base leading-loose max-w-md mb-10">
              La misma filosofía de diseño y calidad argentina que aplicamos en cada boomerang, ahora en una línea de frisbees pensada para el juego en equipo, el aire libre y el deporte recreativo.
            </p>
            <div className="reveal reveal-d3">
              <a
                href="https://www.frisbeesvoodoo.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-brand-sand/40 hover:border-brand-sand text-brand-sand text-sm font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-200 hover:bg-brand-sand hover:text-brand-black group"
              >
                Conocer Frisbees
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
