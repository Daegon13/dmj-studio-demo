export const brand = {
  name: "DMJ Studio",
  businessLine: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  contact: {
    whatsappLabel: "Reservar por WhatsApp",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
  },
  socialProof: {
    rating: 4.9,
    reviewsCount: 358,
    note: "reseñas verificables en plataformas públicas",
  },
  hero: {
    eyebrow: "Demo comercial · Patch 00",
    title: "Base premium lista para escalar la presencia digital de DMJ Studio",
    description:
      "Estructura inicial orientada a conversión: branding sólido, identidad visual de alto impacto y cimientos para secciones comerciales en los próximos patches.",
    secondaryCtaLabel: "Próximo patch: secciones completas",
  },
  placeholders: {
    logo: "/brand/logo-mark.svg",
    heroFrame: "Frame visual placeholder para galería premium",
  },
} as const;

export type Brand = typeof brand;
