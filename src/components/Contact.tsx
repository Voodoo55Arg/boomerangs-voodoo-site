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
  message: string;
}

export default function Contact() {
  const ref = useReveal();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};

    if (!form.name.trim()) e.name = 'Requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Email inválido';
    if (!form.phone.trim()) e.phone = 'Requerido';
    if (!form.subject) e.subject = 'Requerido';
    if (!form.message.trim()) e.message = 'Requerido';

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Error');

      setSent(true);
    } catch (err) {
      console.log(err);
      alert('Error al enviar el mensaje');
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setForm((f) => ({
        ...f,
        [field]: e.target.value,
      }));

      setErrors((er) => ({
        ...er,
        [field]: undefined,
      }));
    };

  return (
    <section
      id="contacto"
      className="bg-brand-black-soft py-28 md:py-40"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT */}
          <div>
            <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-6">
              Contacto
            </p>

            <h2
              className="reveal reveal-d1 font-display font-extrabold uppercase leading-none mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              <span className="text-brand-off-white block">
                Hablemos de lo
              </span>
              <span className="text-brand-sand block">
                que necesitás
              </span>
            </h2>

            <p className="reveal reveal-d2 text-brand-sand/60 text-base leading-loose max-w-md mb-12">
              Estamos para ayudarte. Ya sea para hacer tu primer pedido,
              resolver dudas técnicas o sumar Voodoo a tu negocio.
            </p>

            <div className="reveal reveal-d3">
              <a
                href="https://wa.me/5493518019893"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-brand-off-white px-8 py-5"
              >
                <MessageCircle
                  size={22}
                  className="text-[#25D366]"
                />

                <div>
                  <div className="text-sm font-semibold">
                    WhatsApp directo
                  </div>

                  <div className="text-brand-sand/50 text-xs">
                    +54 9 351 801-9893
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="reveal reveal-d2">
            {sent ? (
              <div className="bg-brand-black/50 border border-brand-olive/30 p-12 text-center">
                <CheckCircle
                  size={40}
                  className="text-brand-olive mx-auto mb-5"
                />

                <h3 className="text-2xl text-brand-off-white mb-3">
                  Mensaje enviado
                </h3>

                <p className="text-brand-sand/60 text-sm">
                  Nos pondremos en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-black/50 border border-white/5 p-8 space-y-5"
                noValidate
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={handleChange('name')}
                  className="w-full p-3 bg-black border text-white"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange('email')}
                  className="w-full p-3 bg-black border text-white"
                />

                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  className="w-full p-3 bg-black border text-white"
                />

                <select
                  value={form.subject}
                  onChange={handleChange('subject')}
                  className="w-full p-3 bg-black border text-white"
                >
                  <option value="">Asunto</option>

                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <textarea
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Escribí tu mensaje..."
                  rows={5}
                  className="w-full p-3 bg-black border text-white resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white p-3 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Enviar
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
