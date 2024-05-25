"use server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const HandlerSendForm = async (data: FormData) => {
  console.log("Datos del formulario", data);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Consulta SEO y Desarrollo Web",
    text: `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`,
    html: `<h1>Mensaje de ${data.name}</h1><p><strong>Nombre:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Mensaje:</strong> ${data.message}</p>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email enviado: ", result.messageId);
  } catch (error) {
    console.error("Error al enviar email:", error);
    throw new Error("Error al enviar el email");
  }
};
