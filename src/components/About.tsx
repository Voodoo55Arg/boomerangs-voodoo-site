import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '2008', label: 'Año de fundación' },
  { value: '+15', label: 'Años de experiencia' },
  { value: '100%', label: 'Fabricación Argentina' },
  { value: '9+', label: 'Modelos diseñados' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="nosotros" className="bg-brand-black py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-6">
              Quiénes somos
            </p>
            <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-8" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}>
              <span className="text-brand-off-white block">Más de 15 años</span>
              <span className="text-brand-sand block">haciendo volar ideas</span>
            </h2>
            <div className="reveal reveal-d2 space-y-5 text-brand-sand/60 text-base leading-loose max-w-lg">
              <p>
                VOODOO nació de la pasión por el vuelo y el diseño. Desde 2008, creamos cada boomerang con un propósito claro: ofrecer experiencias de vuelo auténticas, precisas y accesibles para todos.
              </p>
              <p>
                Cada modelo es el resultado de años de desarrollo, pruebas en campo y escucha activa de nuestra comunidad. Diseño original, materiales de calidad y fabricación 100% argentina son los pilares que nos definen.
              </p>
              <p>
                Más que un producto, somos un punto de encuentro entre el deporte, el aire libre y la creatividad. Innovamos constantemente para que cada vuelo sea mejor que el anterior.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="reveal reveal-d2">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto overflow-hidden" style={{ borderRadius: '2px' }}>
                <img
                  src="/15volando.jpg"
                  alt="Más de 15 años haciendo volar ideas"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-brand-terracotta/15 border border-brand-terracotta/20" />
              <div className="absolute -top-5 -left-5 w-20 h-20 border border-brand-sand/15" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 reveal reveal-d3 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-brand-black p-8 text-center">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-brand-sand uppercase mb-2">
                {s.value}
              </div>
              <div className="text-brand-sand/50 text-xs tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
