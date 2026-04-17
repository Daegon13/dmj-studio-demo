export const brand = {
  name: "DMJ Studio",
  businessLine: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  mapReference: "A 1 cuadra de Plaza Cagancha · Fácil acceso en bus y estacionamiento cercano",
  contact: {
    whatsappLabel: "Reservar por WhatsApp",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
    coursesLabel: "Ver cursos",
    coursesUrl:
      "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+info+sobre+sus+cursos.",
  },
  socialProof: {
    rating: 4.9,
    reviewsCount: 358,
    note: "reseñas verificables en plataformas públicas",
  },
  hero: {
    eyebrow: "Demo comercial · Patch 05",
    title: "Una web que ordena reservas, reduce mensajes sueltos y convierte más",
    description:
      "DMJ Studio puede pasar de responder todo por Instagram a guiar cada lead con pasos claros, horarios visibles y cierres directos por WhatsApp.",
    secondaryCtaLabel: "Ver cursos disponibles",
  },
  bookingSteps: [
    {
      title: "Elegís servicio",
      description: "Corte, barba o combo. El cliente entra y entiende qué puede reservar en segundos.",
    },
    {
      title: "Elegís horario",
      description: "Ve los bloques libres sin escribir 10 mensajes para coordinar disponibilidad.",
    },
    {
      title: "Confirmás por WhatsApp",
      description: "Con un click se envía el turno prearmado y el equipo solo valida la reserva.",
    },
  ],
  availability: {
    title: "Disponibilidad de hoy (mock)",
    caption: "Ejemplo visual editable para mostrar orden operativo sin conectar backend.",
    slots: [
      { time: "10:00", status: "Disponible" },
      { time: "11:30", status: "Último lugar" },
      { time: "13:00", status: "Completo" },
      { time: "15:00", status: "Disponible" },
      { time: "17:30", status: "Disponible" },
      { time: "19:00", status: "Completo" },
    ],
  },
  businessHours: {
    title: "Horarios de atención",
    note: "Estos horarios son demo y se editan desde data local.",
    rows: [
      { day: "Lunes a Viernes", hours: "09:00 a 20:00" },
      { day: "Sábado", hours: "10:00 a 18:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
  },
  finalCta: {
    title: "¿Querés una web que te ordene ventas desde esta semana?",
    description:
      "Convertí consultas dispersas en reservas claras con pasos simples, agenda visible y cierre directo por WhatsApp.",
    primaryLabel: "Quiero mi web comercial",
  },
  placeholders: {
    logo: "/brand/logo-mark.svg",
    heroFrame: "Frame visual placeholder para galería premium",
  },
} as const;

export type Brand = typeof brand;
