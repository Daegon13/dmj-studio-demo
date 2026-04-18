import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/src/data/brand";

const title = `${brand.name} | Demo comercial`;
const description = "Landing comercial de DMJ Studio con foco en claridad visual y conversión por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: brand.name,
  metadataBase: new URL(brand.siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    brand.name,
    "barbería",
    "barbería en Montevideo",
    "reserva por WhatsApp",
    "landing comercial",
  ],
  category: "Business",
  openGraph: {
    title: `${brand.name} | ${brand.businessLine} en Montevideo`,
    description: `${brand.businessLine} en ${brand.zone} con reservas por WhatsApp.`,
    url: brand.siteUrl,
    siteName: brand.name,
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `Landing demo comercial de ${brand.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: `Landing comercial de ${brand.businessLine} con foco visual.`,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]">{children}</body>
    </html>
  );
}
