export const brand = {
  name: "DMJ Studio",
  category: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
  rating: 4.9,
  reviewsCount: 358,
  startingPrice: 250,
  trustBadges: [
    "📍 Ubicación céntrica",
    "🧑‍🎨 Atención personalizada",
    "🪞 Estudio moderno",
    "⚡ Reservas rápidas por WhatsApp",
    "🎓 Cursos de barbería para principiantes y avanzados",
  ],
  services: [
    { name: "Corte", price: "desde $690", description: "Fade, clásico o moderno con asesoría de estilo." },
    { name: "Barba", price: "desde $450", description: "Perfilado preciso con navaja y acabado prolijo." },
    { name: "Cejas", price: "$250", description: "Diseño natural para reforzar tu look final." },
    { name: "Combo", price: "desde $1.050", description: "Corte + barba para una puesta a punto completa." },
  ],
  gallery: [
    "Cortes reales del estudio",
    "Interior del local",
    "Detalle de máquinas y tijeras",
  ],
  bookingSteps: [
    "Elegí el servicio que querés.",
    "Escribinos por WhatsApp.",
    "Confirmá tu horario en minutos.",
  ],
  course: {
    title: "Curso 2025 de barbería profesional",
    details: [
      "3 meses de formación",
      "1 clase por semana",
      "Grupo privado de WhatsApp",
      "Diploma al finalizar",
      "Módulo de marketing y crecimiento personal",
    ],
    cta: "Pedir info del curso",
  },
  reviews: [
    {
      name: "Matías G.",
      text: "Excelente atención y nivel técnico. Reservé por WhatsApp y en menos de 5 minutos ya tenía horario.",
    },
    {
      name: "Santiago R.",
      text: "El estudio está impecable, el corte quedó perfecto y el trato fue de primera. Súper recomendado.",
    },
    {
      name: "Nico P.",
      text: "Me asesoraron según mi tipo de pelo y salí con un look mucho más prolijo. Volvería sin dudar.",
    },
  ],
  schedule: [
    "Lunes a viernes · 10:00 a 20:00",
    "Sábados · 10:00 a 18:00",
    "Domingos · Cerrado",
  ],
  hero: {
    eyebrow: "Barbería premium",
    headline: "Barbería premium en Montevideo: reservá en 1 minuto y salí con resultado de nivel.",
    subheadline:
      "DMJ Studio es una barbería y academia: cerrás tu reserva por WhatsApp o pedís info del curso en segundos.",
    primaryCtaLabel: "Reservar por WhatsApp",
    secondaryCtaLabel: "Ver cursos",
    coursesUrl: "#cursos",
  },
} as const;

export type Brand = typeof brand;
