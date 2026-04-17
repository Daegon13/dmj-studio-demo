export const brand = {
  name: "DMJ Studio",
  category: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
  rating: 4.9,
  reviewsCount: 358,
  hero: {
    eyebrow: "Barbería premium",
    headline: "Estilo urbano con precisión de estudio",
    subheadline:
      "Una demo comercial pensada para convertir reservas y presentar una marca sólida desde el primer vistazo.",
    primaryCtaLabel: "Reservar por WhatsApp",
    secondaryCtaLabel: "Ver cursos",
    coursesUrl: "#cursos",
  },
} as const;

export type Brand = typeof brand;
