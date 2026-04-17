export const brand = {
  name: "DMJ Studio",
  category: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
  rating: 4.9,
  reviewsCount: 358,
  positioning: [
    "Reservá tu corte en segundos",
    "Barbería premium en el centro de Montevideo",
    "Cortes, barba, cejas y formación profesional",
  ],
  trust: [
    "Atención personalizada",
    "Estética premium",
    "Resultados consistentes",
  ],
  services: ["Cortes", "Barba", "Cejas", "Formación"],
  hero: {
    eyebrow: "Barbería premium",
    headline: "Hero oscuro, técnico y urbano para destacar tu estilo",
    subheadline:
      "Tu próxima visita empieza acá, no en diez mensajes por Instagram: reservá en segundos y vení al estudio listo para tu mejor versión.",
    primaryCtaLabel: "Reservá tu corte ahora",
    secondaryCtaLabel: "Ver cursos",
    coursesUrl: "#cursos",
  },
} as const;

export type Brand = typeof brand;
