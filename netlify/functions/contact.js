```javascript
import { Resend } from "resend";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    if (!name || !email || !phone || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Todos los campos son obligatorios." }),
      };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "El email no es válido." }),
      };
    }

    const resend = new Resend(process.env.RESEND_SECRET);

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "boomerangsvoodoo@gmail.com",
      subject: `Contacto web Voodoo: ${subject}`,
      text: `Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Asunto: ${subject}

Mensaje:
${message}`,
      reply_to: email,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "No se pudo enviar el mensaje." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Ocurrió un error al procesar el mensaje." }),
    };
  }
}
```
