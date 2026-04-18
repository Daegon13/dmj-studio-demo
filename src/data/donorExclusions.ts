export type DonorExclusion = {
  path: string;
  reason: string;
};

/**
 * Archivos del repo donante (Astro) que NO deben migrarse al código de Next.js.
 *
 * Criterios de exclusión:
 * - archivos de plantilla/boilerplate que duplican funcionalidad del framework
 * - layouts redundantes que generan solapamiento estructural
 * - piezas demostrativas sin valor comercial para la landing
 */
export const donorExclusions: DonorExclusion[] = [
  {
    path: "src/components/Welcome.astro",
    reason: "Boilerplate de Astro Starter; no aporta valor al dominio de DMJ Studio.",
  },
  {
    path: "src/layouts/Layout.astro",
    reason:
      "Layout de plantilla duplicado frente a BaseLayout.astro; se evita trasladar estructura redundante.",
  },
  {
    path: "src/pages/galeria.astro",
    reason:
      "Página satélite duplicada para el alcance actual; la galería se compone dentro de una landing única.",
  },
  {
    path: "src/pages/servicios.astro",
    reason:
      "Página satélite duplicada para el alcance actual; servicios se consolidan en una sola experiencia de conversión.",
  },
  {
    path: "src/pages/turnos.astro",
    reason:
      "Flujo aislado que duplica intención del CTA principal; se reemplaza por reserva inline en landing.",
  },
  {
    path: "src/pages/ubicacion.astro",
    reason:
      "Página aislada que duplica contenido de ubicación; se integra en la sección final de conversión.",
  },
];
