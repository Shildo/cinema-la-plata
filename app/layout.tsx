import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

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
    <>
      <Navbar />
        <html lang="es">
          <body>{children}</body>
        </html> 
      <Footer />
    </>
  );
}