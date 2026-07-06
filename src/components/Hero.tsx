import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/fondoppal4.jpg',
    label: 'Juego en Familia',
  },
  {
    image: '/fondoppal1.jpg',
    label: 'Outdoor Experience',
  },
  {
    image: '/fondoppal2.jpg',
    label: 'Aventura y Desafío',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: i === current ? 1 : 0, transitionDuration: '1500ms' }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo mark */}
        <div
          className={`mb-6 md:mb-10 flex justify-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-brand-sand/30 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
            <img
              src="/BOOMERANG VOODOO BLUR.png"
              alt="VOODOO"
              className="w-10 h-10 md:w-16 md:h-16 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Label badge */}
        <div
          className={`mb-6 flex justify-center transition-all duration-1000 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-3 text-brand-sand text-xs tracking-[0.3em] uppercase font-medium border border-brand-sand/25 px-5 py-2">
            <span className="w-5 h-px bg-brand-sand/50"></span>
            {slides[current].label}
            <span className="w-5 h-px bg-brand-sand/50"></span>
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-display font-black uppercase leading-none mb-6 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(2.5rem, 9vw, 9rem)', letterSpacing: '-0.01em' }}
        >
          <span className="text-brand-off-white block">El desafío</span>
          <span className="text-brand-sand block">de jugar mejor</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-brand-sand/70 text-sm md:text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed tracking-wide transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Diseño y fabricación argentina de boomerangs y frisbees desde 2008.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#catalogo"
            className="bg-brand-off-white text-brand-black font-semibold text-xs md:text-sm tracking-widest uppercase px-6 py-3 md:px-10 md:py-4 hover:bg-brand-sand transition-all duration-200 hover:-translate-y-0.5"
          >
            Explorar Catálogo
          </a>
          <a
            href="#mayoristas"
            className="border border-brand-sand/50 text-brand-sand font-semibold text-xs md:text-sm tracking-widest uppercase px-6 py-3 md:px-10 md:py-4 hover:bg-brand-sand hover:text-brand-black transition-all duration-200 hover:-translate-y-0.5"
          >
            Quiero vender Voodoo
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-300 ${
              i === current ? 'w-8 bg-brand-sand' : 'w-3 bg-brand-sand/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-brand-sand text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="text-brand-sand animate-bounce" />
      </div>
    </section>
  );
}
