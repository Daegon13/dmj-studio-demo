export const brand = {
  name: "DMJ Studio",
  businessLine: "Barbería",
  zone: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  mapReference: "A 1 cuadra de Plaza Cagancha · Fácil acceso en bus y estacionamiento cercano",
  location: {
    imageUrl:
      "/brand/hero-main.svg",
    imageAlt: "Fachada de DMJ Studio vista desde la vereda",
    neighborhood: "Centro, Montevideo",
    landmark: "A 1 cuadra de Plaza Cagancha",
    mapsUrl: "https://maps.google.com/?q=18+de+Julio+1710+Montevideo",
  },
  siteUrl: "https://dmj-studio-demo.vercel.app",
  contact: {
    whatsappLabel: "Agendar por WhatsApp",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
    coursesLabel: "Consultar formaciones",
    coursesUrl:
      "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+info+sobre+sus+cursos.",
  },
  socialProof: {
    rating: 4.9,
    reviewsCount: 358,
    note: "reseñas verificables en plataformas públicas",
  },
  hero: {
    eyebrow: "Landing comercial DMJ",
    title: "Presencia clara para convertir consultas en reservas confirmadas",
    description:
      "Esta versión mantiene una sola landing, prioriza lectura rápida y deja el flujo de turnos avanzado para una etapa posterior.",
    secondaryCtaLabel: "Explorar formaciones",
    imageUrl: "/brand/hero-main.svg",
    imageAlt: "Barbero trabajando junto a la silla principal de DMJ Studio",
    imageFallbackText: "Imagen no disponible temporalmente: vista principal del estudio",
  },
  services: {
    eyebrow: "Servicios base",
    title: "Opciones simples para decidir y reservar sin fricción",
    description:
      "Mostramos servicios, duración y precio en un bloque limpio para facilitar la decisión desde el primer scroll.",
    items: [
      {
        name: "Corte clásico",
        price: "$790 UYU",
        duration: "40 min",
        image: "/brand/services/corte-clasico.svg",
        popular: false,
      },
      {
        name: "Barba premium",
        price: "$650 UYU",
        duration: "30 min",
        image: "/brand/services/barba-premium.svg",
        popular: false,
      },
      {
        name: "Combo corte + barba",
        price: "$1.250 UYU",
        duration: "70 min",
        image: "/brand/services/combo-corte-barba.svg",
        popular: true,
      },
    ],
  },
  bookingSteps: [
    {
      title: "Elegís servicio",
      description: "El cliente entiende en segundos qué incluye cada opción y cuánto dura.",
    },
    {
      title: "Definís horario",
      description: "Se muestra disponibilidad orientativa para ordenar la conversación inicial.",
    },
    {
      title: "Confirmás por WhatsApp",
      description: "Se envía un mensaje listo para confirmar, sin sumar complejidad en esta fase.",
    },
  ],
  availability: {
    title: "Disponibilidad orientativa",
    caption: "Vista simple para dar contexto visual. La lógica avanzada de turnos queda para una próxima iteración.",
    slots: [
      { time: "10:00", status: "Disponible" },
      { time: "11:30", status: "Último lugar" },
      { time: "13:00", status: "Completo" },
      { time: "15:00", status: "Disponible" },
      { time: "17:30", status: "Disponible" },
      { time: "19:00", status: "Completo" },
    ],
  },
  testimonials: {
    eyebrow: "Experiencias reales",
    title: "Comentarios que respaldan el estándar de DMJ",
    description:
      "Testimonios de referencia para reforzar confianza y sostener una decisión rápida antes del contacto.",
    items: [
      {
        quote: "Me atendieron puntual y con un resultado impecable. Reservar fue directo.",
        author: "Matías R.",
        meta: "Cliente frecuente · Corte + barba",
      },
      {
        quote: "La propuesta es clara: precio, tiempo y confirmación. Todo en una sola vista.",
        author: "Nicolás P.",
        meta: "Primera visita · Corte clásico",
      },
      {
        quote: "El contacto por WhatsApp me resolvió rápido sin mensajes eternos.",
        author: "Santiago V.",
        meta: "Cliente mensual · Barba premium",
      },
    ],
    imageStrip: [
      {
        src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=80",
        alt: "Barbero realizando un corte con degradado",
      },
      {
        src: "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=1200&q=80",
        alt: "Cliente en sillón de barbería durante perfilado",
      },
      {
        src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
        alt: "Herramientas y acabado final en barbería",
      },
    ],
  },
  businessHours: {
    title: "Horarios de atención",
    note: "Horarios de referencia en esta fase visual.",
    rows: [
      { day: "Lunes a Viernes", hours: "09:00 a 20:00" },
      { day: "Sábado", hours: "10:00 a 18:00" },
      { day: "Domingo", hours: "Cerrado" },
    ],
  },
  finalCta: {
    title: "¿Querés impulsar DMJ con una landing que convierta mejor?",
    description:
      "Ordenamos el mensaje en una estructura única, visualmente clara y lista para evolucionar en próximas fases.",
    primaryLabel: "Quiero esta estructura para mi marca",
  },
  footer: {
    eyebrow: "DMJ Studio · Landing one-page",
    title: "Arquitectura estable para iterar diseño sin abrir nuevas rutas",
    description:
      "Cada bloque se alimenta desde `brand.ts`, permitiendo ajustar copy, estilo y propuesta visual sin romper la base actual.",
  },
  placeholders: {
    logo: "/brand/logo-mark.svg",
    heroFrame: "Espacio de imagen principal: experiencia en sillón + detalle de herramientas",
  },
} as const;

export type Brand = typeof brand;
