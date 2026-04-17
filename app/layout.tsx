import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/src/data/brand";

const title = `${brand.name} | Demo comercial`;
const description = "Demo comercial de alto impacto para barbería premium en Montevideo.";

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
    "barbería premium",
    "barbería en Montevideo",
    "reserva por WhatsApp",
    "demo comercial",
  ],
  category: "Business",
  openGraph: {
    title: `${brand.name} | ${brand.businessLine} premium`,
    description: `${brand.businessLine} premium en ${brand.zone}.`,
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
    description: `Base comercial premium de ${brand.businessLine}.`,
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
