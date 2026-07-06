import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Frisbees', href: '#frisbees' },
  { label: 'Mayoristas', href: '#mayoristas' },
  { label: 'Puntos de Venta', href: '#puntos-de-venta' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/5 py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between min-h-24 lg:min-h-28">
        {/* Logo */}
        <a href="#" className="flex items-center gap-5 group h-full lg:h-auto">
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-brand-sand/20 border border-brand-sand/30 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="/BOOMERANG_VOODOO_BLUR.png"
              alt="VOODOO Boomerangs"
              className="w-18 h-18 lg:w-22 lg:h-22 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <div className="leading-none">
            <span className="font-display text-4xl lg:text-5xl font-extrabold tracking-widest text-brand-off-white uppercase block">
              VOODOO
            </span>
            <span className="text-base lg:text-lg tracking-[0.1em] text-brand-sand uppercase font-medium block">
              Boomerangs
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm tracking-wider text-brand-sand/70 hover:text-brand-off-white transition-colors duration-200 uppercase font-medium"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#mayoristas')}
          className="hidden xl:flex items-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-light text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
        >
          Quiero Vender
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-brand-off-white p-1"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-brand-black/98 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-brand-sand/80 hover:text-brand-off-white text-sm tracking-widest uppercase font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#mayoristas')}
            className="mt-2 bg-brand-terracotta text-white text-xs font-semibold tracking-widest uppercase px-5 py-3 text-center"
          >
            Quiero Vender Voodoo
          </button>
        </div>
      </div>
    </header>
  );
}
