import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinema La Plata",
  description: "Cinema La Plata — Cartelera, experiencias y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}