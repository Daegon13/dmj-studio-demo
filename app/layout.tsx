import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { brand } from "@/src/data/brand";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: `${brand.name} | Demo comercial`,
  description:
    "Demo comercial premium para barbería en Montevideo, orientada a reservas y cursos.",
  applicationName: brand.name,
  keywords: [
    "barbería premium",
    "barbería en Montevideo",
    "reservas por WhatsApp",
    "DMJ Studio",
  ],
  openGraph: {
    title: `${brand.name} | Barbería premium`,
    description: "Barbería premium en el Centro de Montevideo.",
    type: "website",
    locale: "es_UY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
