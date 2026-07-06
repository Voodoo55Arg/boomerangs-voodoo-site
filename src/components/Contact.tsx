import { useState } from 'react';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const subjects = [
  'Compra mayorista',
  'Distribución',
  'Consulta general',
  'Soporte',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
}

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido';
    if (!form.phone.trim()) e.phone = 'Requerido';
    if (!form.subject) e.subject = 'Requerido';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  return (
    <section id="contacto" className="bg-brand-black-soft py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-6">
              Contacto
            </p>
            <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              <span className="text-brand-off-white block">Hablemos de lo</span>
              <span className="text-brand-sand block">que necesitás</span>
            </h2>
            <p className="reveal reveal-d2 text-brand-sand/60 text-base leading-loose max-w-md mb-12">
              Estamos para ayudarte. Ya sea para hacer tu primer pedido, resolver dudas técnicas o sumar Voodoo a tu negocio.
            </p>

            {/* WhatsApp */}
            <div className="reveal reveal-d3">
              <a
                href="https://wa.me/5493518019893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-brand-off-white px-8 py-5 transition-all duration-200 group"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
                <div>
                  <div className="text-sm font-semibold tracking-wide">WhatsApp directo</div>
                  <div className="text-brand-sand/50 text-xs tracking-wider">+54 9 351 801-9893</div>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div className="reveal reveal-d4 mt-10 flex gap-4">
              {[
                { label: 'Instagram', href: 'https://instagram.com/voodooboomerangs', icon: 'IG' },
                { label: 'Facebook', href: 'https://facebook.com/boomerangsvoodoo', icon: 'FB' },
                { label: 'YouTube', href: 'https://youtube.com/@boomerangsvoodoo', icon: 'YT' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 hover:border-brand-sand/40 text-brand-sand/50 hover:text-brand-sand text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-d2">
            {sent ? (
              <div className="bg-brand-black/50 border border-brand-olive/30 p-12 text-center">
                <CheckCircle size={40} className="text-brand-olive mx-auto mb-5" />
                <h3 className="font-display text-2xl uppercase text-brand-off-white mb-3">
                  Mensaje enviado
                </h3>
                <p className="text-brand-sand/60 text-sm">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-black/50 border border-white/5 p-8 space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-sand/50 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`w-full bg-brand-black border px-4 py-3 text-sm text-brand-off-white placeholder:text-brand-sand/25 focus:outline-none focus:border-brand-sand/50 transition-colors ${
                      errors.name ? 'border-brand-terracotta/50' : 'border-white/10'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="text-brand-terracotta text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-sand/50 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    className={`w-full bg-brand-black border px-4 py-3 text-sm text-brand-off-white placeholder:text-brand-sand/25 focus:outline-none focus:border-brand-sand/50 transition-colors ${
                      errors.email ? 'border-brand-terracotta/50' : 'border-white/10'
                    }`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <p className="text-brand-terracotta text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-sand/50 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={`w-full bg-brand-black border px-4 py-3 text-sm text-brand-off-white placeholder:text-brand-sand/25 focus:outline-none focus:border-brand-sand/50 transition-colors ${
                      errors.phone ? 'border-brand-terracotta/50' : 'border-white/10'
                    }`}
                    placeholder="+54 9 xxx xxx xxxx"
                  />
                  {errors.phone && <p className="text-brand-terracotta text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-sand/50 mb-2">
                    Asunto *
                  </label>
                  <select
                    value={form.subject}
                    onChange={handleChange('subject')}
                    className={`w-full bg-brand-black border px-4 py-3 text-sm focus:outline-none focus:border-brand-sand/50 transition-colors appearance-none cursor-pointer ${
                      errors.subject ? 'border-brand-terracotta/50' : 'border-white/10'
                    } ${form.subject ? 'text-brand-off-white' : 'text-brand-sand/25'}`}
                  >
                    <option value="" disabled>Seleccioná un asunto</option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="text-brand-black bg-brand-beige">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-brand-terracotta text-xs mt-1">{errors.subject}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-terracotta hover:bg-brand-terracotta-light text-white font-semibold text-sm tracking-widest uppercase py-4 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Send size={14} />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
