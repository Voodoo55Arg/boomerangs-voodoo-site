import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full border border-brand-sand/25 bg-brand-sand/5 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src="/BOOMERANG_VOODOO_BLUR.png"
                  alt="VOODOO"
                  className="w-12 h-12 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="font-display text-xl font-extrabold tracking-widest text-brand-off-white uppercase block leading-none">VOODOO</span>
                <span className="text-xs tracking-[0.2em] text-brand-sand/60 uppercase">Boomerangs</span>
              </div>
            </div>
            <p className="text-brand-sand/40 text-xs leading-relaxed max-w-xs">
              Diseño y fabricación argentina de boomerangs recreativos, deportivos y educativos desde 2008.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-brand-sand/40 text-[10px] tracking-[0.3em] uppercase mb-5">Navegación</p>
            <ul className="space-y-3">
              {[
                { label: 'Quiénes somos', href: '#nosotros' },
                { label: 'Catálogo', href: '#catalogo' },
                { label: 'Frisbees', href: '#frisbees' },
                { label: 'Canal mayorista', href: '#mayoristas' },
                { label: 'Puntos de venta', href: '#puntos-de-venta' },
                { label: 'Contacto', href: '#contacto' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-brand-sand/50 hover:text-brand-sand text-xs tracking-wider uppercase transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-brand-sand/40 text-[10px] tracking-[0.3em] uppercase mb-5">Redes sociales</p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/voodooboomerangs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-brand-sand/40 flex items-center justify-center text-brand-sand/50 hover:text-brand-sand transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/boomerangsvoodoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-brand-sand/40 flex items-center justify-center text-brand-sand/50 hover:text-brand-sand transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com/@boomerangsvoodoo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-brand-sand/40 flex items-center justify-center text-brand-sand/50 hover:text-brand-sand transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
            <div className="border border-brand-terracotta/20 bg-brand-terracotta/5 px-4 py-3">
              <p className="text-brand-sand/50 text-[10px] tracking-wider uppercase mb-0.5">WhatsApp</p>
              <a
                href="https://wa.me/5493518019893"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sand text-sm hover:text-brand-off-white transition-colors"
              >
                +54 9 351 801-9893
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Copyright */}
        <p className="text-center text-brand-sand/30 text-xs leading-relaxed max-w-3xl mx-auto">
          © Todos los derechos reservados — Las imágenes e información publicadas en este sitio, logotipo y marca son propiedad de www.boomerangsvoodoo.com.ar. Prohibida su reproducción total o parcial sin autorización. Voodoo Boomerangs {year} — Fabricación 100% Argentina · Diseño y producción nacional desde 2008
        </p>
      </div>

      {/* Final text */}
      <div className="mt-20 pt-12 border-t border-white/5">
        <p className="text-center text-brand-sand/40 font-sans text-sm tracking-wide uppercase">
          Jesús es el Rey
        </p>
      </div>
    </footer>
  );
}
