# Política de implementación desde repo donante (Astro → Next.js)

Esta política define cómo se aprovecha el repo donante de Astro sin copiar su código de forma literal.

## 1) Prohibición de copiado directo de `.astro`

- Está prohibido mover archivos `.astro` al árbol de implementación (`app/` y `src/`).
- También está prohibido importar rutas del donante en código productivo.
- La validación automatizada vive en `scripts/validate-donor-reuse.mjs`.

## 2) Qué sí se toma del donante

Únicamente se puede reutilizar:

- composición visual
- spacing
- jerarquía de contenido
- microinteracciones

No se permite trasladar markup, estructura de archivos ni utilidades framework-specific sin rediseño.

## 3) Reimplementación obligatoria en React/Next

Cada bloque debe reescribirse con:

- React + App Router de Next.js
- TypeScript con tipos explícitos y limpios
- componentes propios y sin capas de compatibilidad innecesarias

## 4) Exclusiones explícitas del repo donante

El listado oficial y versionado de exclusiones está en `src/data/donorExclusions.ts`.

Toda migración debe conservar esa lista con motivo de exclusión por archivo.
