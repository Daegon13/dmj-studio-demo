import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/src/data/brand";

export const metadata: Metadata = {
  title: `${brand.name} | Demo comercial`,
  description:
    "Demo comercial de alto impacto para barbería premium en Montevideo.",
  applicationName: brand.name,
  metadataBase: new URL("https://dmj-studio-demo.local"),
  keywords: [
    brand.name,
    "barbería premium",
    "barbería en Montevideo",
    "reserva por WhatsApp",
    "demo comercial",
  ],
  openGraph: {
    title: `${brand.name} | ${brand.businessLine} premium`,
    description: `${brand.businessLine} premium en ${brand.zone}.`,
    type: "website",
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Demo comercial`,
    description: `Base comercial premium de ${brand.businessLine}.`,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
