const { Resend } = require("resend");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    const { name, email, message } = data;

    const resend = new Resend(process.env.RESEND_SECRET);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "boomerangsvoodoo@gmail.com",
      subject: "Nuevo contacto desde Boomerangs Voodoo",
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `,
      reply_to: email,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (error) {
    console.log("RESEND ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
