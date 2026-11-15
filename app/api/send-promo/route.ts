import nodemailer from "nodemailer";

import { buildPromoEmail } from "../mail-hooks/cumple-mail"
import { buildCarteleraEmail } from "../mail-hooks/cartelera-mail";
import { movies } from "../../data/movie";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: "Solicitud no válida." }, { status: 403 });
  }

  let body: { email?: unknown; consent?: unknown; website?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ error: "Solicitud no válida." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ error: "Ingresá un correo electrónico válido." }, { status: 400 });
  }
  if (body.consent !== true) {
    return Response.json({ error: "Confirmá que querés recibir esta promoción por correo." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!gmailUser || !gmailAppPassword || !siteUrl) {
    return Response.json(
      { error: "El envío por Gmail todavía no está configurado." },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: { name: "Cinema La Plata", address: gmailUser },
      to: email,
      subject: "¡Que los cumplas feliz! Tenés 30% OFF en el Candy Bar",
      html: buildPromoEmail(siteUrl),
    });

    await transporter.sendMail({
      from: { name: "Cinema La Plata", address: gmailUser },
      to: email,
      subject: "Cartelera de Cinema La Plata",
      html: buildCarteleraEmail(siteUrl, movies),
    });

    return Response.json({ ok: true });
  } catch (error) {
    const mailError = error as { code?: unknown; name?: unknown };
    console.error("Gmail SMTP send failed", {
      name: typeof mailError.name === "string" ? mailError.name : undefined,
      code: typeof mailError.code === "string" ? mailError.code : undefined,
    });
    return Response.json(
      { error: "Gmail no pudo enviar el correo. Revisá las credenciales de envío e intentá nuevamente." },
      { status: 502 },
    );
  }
}
