import { useState } from 'react';
import { Download, ShoppingCart, ZoomIn, Wind, Target, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import Lightbox from './Lightbox';

interface Product {
  name: string;
  tagline: string;
  description: string;
  hand: string;
  environment: string;
  level: string;
  age: string;
  distance: string;
  images: string[];
  extra?: string;
  contain?: boolean;
  pdfUrl?: string;
}

const righthanded: Product[] = [
  {
    name: 'Aboriginal',
    tagline: 'Elegancia clásica',
    description: 'Elegancia y armonía en cada vuelo. Diseño clásico para principiantes y expertos.',
    hand: 'Diestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+12 años',
    distance: '20–22 mts',
    images: ['/ABORIGINAL.jpg'],
    contain: true,
    pdfUrl: '/ABORIGINAL.pdf',
  },
  {
    name: 'Aussie',
    tagline: 'Potencia y alcance',
    description: 'Potencia, alcance y control. Para quienes buscan distancia y seguridad.',
    hand: 'Diestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+12 años',
    distance: '25–35 mts',
    images: ['/AUSSIE.jpg'],
    contain: true,
    pdfUrl: '/AUSSIE.pdf',
  },
  {
    name: 'Retro',
    tagline: 'Vuelos ágiles',
    description: 'Energía y dinamismo en estado puro. Vuelos ágiles y atrapadas que elevan la experiencia de juego.',
    hand: 'Diestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+10 años',
    distance: '20–25 mts',
    images: ['/RETRO.jpg'],
    contain: true,
    pdfUrl: '/RETRO.pdf',
  },
  {
    name: 'Mini V',
    tagline: 'Máximo rendimiento',
    description: 'Máximo rendimiento en un formato ágil, con excelente respuesta incluso en condiciones de viento exigentes.',
    hand: 'Diestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+10 años',
    distance: '20–30 mts',
    images: ['/MINI_V.jpg'],
    contain: true,
    pdfUrl: '/MINI_V.pdf',
  },
];

const ambidextrous: Product[] = [
  {
    name: 'Perception',
    tagline: 'Versatilidad sin límites',
    description: 'Versatilidad sin límites. Balance y control en cualquier condición de juego.',
    hand: 'Ambidiestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+10 años',
    distance: '20–25 mts',
    images: ['/PERCEPTION.jpg'],
    contain: true,
    pdfUrl: '/PERCEPTION.pdf',
  },
  {
    name: 'Windmaster',
    tagline: 'Confianza desde el primer lanzamiento',
    description: 'Fácil de lanzar, una experiencia simple y divertida desde el primer uso.',
    hand: 'Ambidiestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+8 años',
    distance: '20–25 mts',
    images: ['/WINDMASTER.jpg'],
    contain: true,
    pdfUrl: '/WINDMASTER.pdf',
  },
  {
    name: 'Vector',
    tagline: 'Precisión y estabilidad',
    description: 'Precisión y estabilidad superiores. Control absoluto y vuelos consistentes en cada lanzamiento.',
    hand: 'Ambidiestro',
    environment: 'Outdoor',
    level: 'Inicial/Intermedio',
    age: '+10 años',
    distance: '20–25 mts',
    images: ['/VECTOR.jpg'],
    contain: true,
    pdfUrl: '/VECTOR.pdf',
  },
  {
    name: 'Star Indoor',
    tagline: 'Diversión en cualquier espacio',
    description: 'Diversión sin límites de espacio. Para jugar en interiores o áreas reducidas con total confianza.',
    hand: 'Ambidiestro',
    environment: 'Indoor/Outdoor',
    level: 'Inicial/Intermedio',
    age: '+5 años',
    distance: '4–8 mts',
    images: ['/STAR_INDOOR.jpg'],
    contain: true,
    pdfUrl: '/STAR_INDOOR.pdf',
  },
];

interface ProductCardProps {
  product: Product;
  onImageClick: (images: string[], index: number) => void;
}

function ProductCard({ product, onImageClick }: ProductCardProps) {
  return (
    <div className="bg-[#111111] border border-white/5 hover:border-brand-sand/20 transition-all duration-300 group">
      {/* Image */}
      <div
        className="relative overflow-hidden aspect-[4/3] cursor-zoom-in"
        onClick={() => onImageClick(product.images, 0)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${product.contain ? 'object-contain' : 'object-cover'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-brand-black/70 p-1.5">
          <ZoomIn size={14} className="text-brand-sand" />
        </div>
        {/* Environment badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] tracking-widest uppercase font-medium bg-brand-black/70 text-brand-sand/80 px-2.5 py-1 backdrop-blur-sm">
            {product.environment}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <p className="text-brand-sand/50 text-[10px] tracking-widest uppercase mb-1">{product.tagline}</p>
          <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-brand-off-white">
            {product.name}
          </h3>
        </div>

        <p className="text-brand-sand/60 text-sm leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6 text-xs">
          <div className="flex items-center gap-2">
            <Users size={11} className="text-brand-sand/40 flex-shrink-0" />
            <span className="text-brand-sand/50 tracking-wide">{product.hand}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target size={11} className="text-brand-sand/40 flex-shrink-0" />
            <span className="text-brand-sand/50 tracking-wide">{product.age}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind size={11} className="text-brand-sand/40 flex-shrink-0" />
            <span className="text-brand-sand/50 tracking-wide">{product.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 border border-brand-sand/30 flex-shrink-0" />
            <span className="text-brand-sand/50 tracking-wide">{product.level}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href="#contacto"
            className="flex-1 bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs font-semibold tracking-widest uppercase py-2.5 px-4 text-center transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <ShoppingCart size={12} />
            Comprar
          </a>
          {product.pdfUrl ? (
            <a
              href={product.pdfUrl}
              download
              className="border border-brand-sand/25 hover:border-brand-sand/60 text-brand-sand/60 hover:text-brand-sand text-xs p-2.5 transition-all duration-200 flex items-center justify-center"
              title="Descargar instrucciones PDF"
            >
              <Download size={14} />
            </a>
          ) : (
            <button
              className="border border-brand-sand/10 text-brand-sand/25 text-xs p-2.5 cursor-default"
              title="PDF no disponible"
              disabled
            >
              <Download size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  const ref = useReveal();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const nextImage = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % prev.images.length } : null
    );
  const prevImage = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length } : null
    );

  return (
    <section id="catalogo" className="bg-brand-black-soft py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Productos
          </p>
          <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <span className="text-brand-off-white">Catálogo</span>
            <span className="text-brand-sand"> Voodoo</span>
          </h2>
          <p className="reveal reveal-d2 text-brand-sand/50 text-base max-w-xl leading-relaxed">
            Cada modelo diseñado y fabricado en Argentina con precisión aerodinámica y materiales de calidad.
          </p>
        </div>

        {/* Right-handed */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-5 mb-10">
            <div>
              <p className="text-brand-sand/40 text-[10px] tracking-[0.35em] uppercase mb-0.5">Categoría</p>
              <h3 className="font-display font-bold text-3xl uppercase tracking-wider text-brand-off-white">
                Boomerangs Diestros
              </h3>
            </div>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {righthanded.map((p, i) => (
              <div key={p.name} className={`reveal reveal-d${Math.min(i + 1, 4)}`}>
                <ProductCard product={p} onImageClick={openLightbox} />
              </div>
            ))}
          </div>
        </div>

        {/* Ambidextrous */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-5 mb-10">
            <div>
              <p className="text-brand-sand/40 text-[10px] tracking-[0.35em] uppercase mb-0.5">Categoría</p>
              <h3 className="font-display font-bold text-3xl uppercase tracking-wider text-brand-off-white">
                Boomerangs Ambidiestros
              </h3>
            </div>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ambidextrous.map((p, i) => (
              <div key={p.name} className={`reveal reveal-d${Math.min(i + 1, 4)}`}>
                <ProductCard product={p} onImageClick={openLightbox} />
              </div>
            ))}
          </div>
        </div>

        {/* BUMI - Compact Card */}
        <div className="reveal reveal-d1 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#111111]/50 border border-white/5 hover:border-brand-olive/20 transition-all duration-300">
            {/* Image - compact */}
            <div
              className="sm:col-span-1 relative overflow-hidden aspect-square sm:aspect-auto cursor-zoom-in"
              onClick={() => openLightbox(['/Bumipack.png'], 0)}
            >
              <img
                src="/Bumipack.png"
                alt="BUMI educativo"
                className="w-full h-full object-contain bg-[#1a1a1a] p-3 hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content - compact */}
            <div className="sm:col-span-2 p-4 sm:p-5 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-brand-olive text-[9px] tracking-[0.3em] uppercase font-medium border border-brand-olive/30 px-2 py-0.5 w-fit">
                  Educativo
                </span>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-brand-off-white">BUMI</h3>
              </div>

              <p className="text-brand-sand/60 text-xs leading-relaxed mb-2.5">
                Producto educativo para talleres. Combina juego, creatividad y aprendizaje.
              </p>

              {/* Tech specs - inline */}
              <div className="flex flex-wrap gap-2 mb-3 text-[9px]">
                <span className="text-brand-sand/50 border border-white/10 px-2 py-1">+5 años</span>
                <span className="text-brand-sand/50 border border-white/10 px-2 py-1">MDF 3mm</span>
                <span className="text-brand-sand/50 border border-white/10 px-2 py-1">Indoor</span>
                <span className="text-brand-sand/50 border border-white/10 px-2 py-1">+ Acuarelas</span>
              </div>

              {/* Actions - compact */}
              <div className="flex gap-2">
                <a
                  href="#contacto"
                  className="flex-1 bg-brand-olive hover:bg-brand-olive-light text-white text-[11px] font-semibold tracking-widest uppercase py-1.5 px-3 text-center transition-all duration-200"
                >
                  Consultar
                </a>
                <button className="border border-brand-sand/25 hover:border-brand-sand/60 text-brand-sand/60 hover:text-brand-sand text-xs px-3 py-1.5 transition-all duration-200">
                  <Download size={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
