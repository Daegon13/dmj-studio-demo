# DMJ Studio — Plan de patches para demo comercial

## 0. Definición estratégica

**Tipo de proyecto:** Demo comercial, no MVP ni SaaS.

**Objetivo real:**
Construir una pieza web corta, muy visual y orientada a conversión para abrir conversación con DMJ Studio y mostrar criterio comercial. La demo debe sentirse como una barbería premium de ciudad, con foco en **reservas**, **prueba social**, **servicios**, **ubicación** y una segunda línea de negocio visible: **cursos**.

**Lo que NO vamos a hacer:**
- backend real de agenda
- panel admin
- sistema de pagos
- login
- CMS
- sobreingeniería

**Lo que SÍ debe transmitir:**
- marca prolija y seria
- look premium/barber moderno
- claridad comercial inmediata
- sensación de negocio real listo para vender más
- CTA visibles a WhatsApp / reserva / cursos

---

## 1. Lectura comercial del lead

### Fortalezas detectadas
- reputación alta
- ubicación fuerte sobre 18 de Julio
- marca visual ya definida
- propuesta clara de servicios
- contenido real en Instagram
- posibilidad de vender tanto cortes como cursos

### Brecha a explotar en la demo
- no hay web propia visible
- no existe una experiencia clara de conversión fuera de Instagram
- la propuesta comercial hoy depende demasiado del perfil social
- falta una pieza que ordene: **qué hacen, cuánto cuesta, dónde están, cómo reservar, por qué elegirlos**

### Tesis comercial de la demo
La demo no debe parecer “una web institucional”.
Debe parecer una **máquina de captar reservas** con estética de barbería premium y con un segundo CTA para cursos.

---

## 2. Dirección estética obligatoria

### ADN visual a respetar
Tomar como referencia directa lo que se ve en el Instagram y las historias:
- base negra / grafito
- blanco roto / gris metalizado
- detalles cromados o vidrio oscuro
- acento rojo muy medido o azul barber pole muy puntual
- fotografía con ring light, espejos, máquinas, tijeras y cortes reales
- sensación de estudio/barbería urbana, prolija, moderna y masculina

### Principios de diseño
- hero oscuro y cinematográfico
- tipografía elegante para titulares + sans limpia para contenido
- bloques con contraste fuerte
- CTA grandes, directos y pocos
- textura sutil: blur, glass oscuro, borde fino, sombra suave
- mobile first, porque el lead vive en Instagram/WhatsApp

### Frases de posicionamiento sugeridas
- **Reservá tu corte en segundos**
- **Barbería premium en el centro de Montevideo**
- **Cortes, barba, cejas y formación profesional**
- **Tu próxima visita empieza acá, no en diez mensajes por Instagram**

---

## 3. Arquitectura mínima viable de la demo

### Stack recomendado
- Next.js 14 + App Router
- TypeScript
- Tailwind CSS
- datos mock en archivos locales
- deploy en Vercel

### Estructura de una sola landing con alto impacto
1. **Hero premium**
   - headline fuerte
   - subtítulo corto
   - CTA Reservar por WhatsApp
   - CTA Ver cursos
   - prueba social inmediata: 4.9 + reseñas

2. **Bloque de confianza**
   - badges: ubicación, atención personalizada, estudio moderno, reservas rápidas

3. **Servicios destacados**
   - corte
   - barba
   - cejas
   - combos
   - precios visibles

4. **Experiencia / galería**
   - cortes reales
   - interior del local
   - detalles de herramientas

5. **Sección “Cómo reservar”**
   - paso 1 elegir servicio
   - paso 2 escribir por WhatsApp
   - paso 3 confirmar horario
   - esto vende claridad aunque sea mock

6. **Cursos**
   - curso 2025
   - 3 meses
   - 1 clase por semana
   - grupo de WhatsApp
   - diploma
   - marketing y crecimiento personal
   - CTA Pedir info

7. **Prueba social**
   - reseñas mock inspiradas en el tono de barbería real
   - contador visual de reputación

8. **Ubicación + horarios + CTA final**
   - mapa mock / tarjeta de ubicación
   - dirección visible
   - botón de reservar
   - botón de abrir WhatsApp

9. **Sticky CTA móvil**
   - Reservar
   - Cursos

---

## 4. Checklist comercial obligatorio

La demo final debe cumplir sí o sí con esto:
- en los primeros 5 segundos debe quedar claro qué negocio es
- debe verse premium, no plantilla genérica
- debe tener precios visibles en servicios
- debe mostrar prueba social arriba, no enterrada
- debe tener CTA arriba del fold
- debe tener CTA flotante en mobile
- debe tener doble intención comercial: **reservas** y **cursos**
- debe sentirse hecha para cerrar, no para decorar

---

## 5. Plan de patches

## Patch 00 — Bootstrap y base de marca

### Objetivo
Levantar el proyecto con estructura limpia, tokens visuales y contenido base del lead.

### Alcance
- crear repo Next.js + Tailwind + TypeScript
- definir paleta y tokens base
- cargar datos mock del negocio
- definir assets placeholders
- crear layout global y metadata

### Entregables
- proyecto corre localmente
- archivo central de datos de marca
- theme oscuro consistente
- favicon/logotipo placeholder elegante

### Aceptación
- la base ya se siente barber premium aunque aún no tenga secciones completas
- no hay estilos genéricos de create-next-app visibles

### Prompt Codex
```text
Quiero que prepares el Patch 00 para una demo comercial de barbería premium llamada DMJ Studio.

Contexto:
- Esto NO es un SaaS ni un MVP. Es una demo comercial de alto impacto para presentar a un lead real.
- Stack: Next.js 14 App Router + TypeScript + Tailwind.
- Debe quedar listo para seguir iterando por patches.
- Estética: negra, blanca, gris metalizado, toques mínimos rojo o azul barber pole; look premium, moderno, urbano.

Implementa:
1. Estructura base del proyecto limpia y reusable.
2. Un archivo central de datos de marca con:
   - nombre: DMJ Studio
   - rubro: Barbería
   - zona: Centro, Montevideo
   - dirección: 18 de Julio 1710 esq. Magallanes
   - CTA WhatsApp
   - rating/reseñas como datos mock configurables
3. Layout global con fondo oscuro premium.
4. Variables/tokens visuales para colores, radios, sombras, contenedores y botones.
5. Home temporal con hero placeholder elegante, ya alineado al branding.
6. Metadata básica para demo comercial.

Restricciones:
- No backend.
- No dependencias innecesarias.
- No componentes sobrantes.
- No sobreingeniería.

Devuélveme cambios listos para commit y un breve resumen técnico.
```

---

## Patch 01 — Hero comercial + prueba social + CTAs

### Objetivo
Construir una apertura que sola ya venda la demo.

### Alcance
- hero full width
- titular y subtitular de alto impacto
- CTA principal a WhatsApp
- CTA secundario a cursos
- bloque visible con rating, reseñas y ubicación
- imagen o composición visual tipo estudio premium

### Entregables
- primer pantallazo fuerte
- CTA claros
- info comercial crítica visible sin scroll largo

### Aceptación
- si el lead ve solo el hero, ya entiende el valor
- parece negocio serio y no “landing de estudiante”

### Prompt Codex
```text
Implementa el Patch 01 para la demo de DMJ Studio.

Objetivo:
Crear un hero de alto impacto comercial, mobile first, que se vea premium y convierta.

Necesito:
1. Hero oscuro/cinematográfico con composición elegante.
2. Headline fuerte orientado a reservas.
3. Subheadline corto que posicione la barbería en Montevideo.
4. CTA principal: Reservar por WhatsApp.
5. CTA secundario: Ver cursos.
6. Barra o cards de prueba social con rating, reseñas, ubicación y atención personalizada.
7. Imagen/visual placeholder premium alineado al mundo barber: máquinas, tijeras, ring light, espejos, cortes.

Criterios UX:
- El CTA principal debe destacarse de inmediato.
- En mobile debe quedar todo claro sin ruido.
- El look debe recordar a una barbería urbana premium, no a una startup tecnológica.

No agregues sliders automáticos ni cosas innecesarias.
Devuélveme el patch listo para commit.
```

---

## Patch 02 — Servicios con precios + bundles + microconversión

### Objetivo
Mostrar oferta clara y vender rápido.

### Alcance
- cards o filas de servicios
- precios visibles
- combos destacados
- etiqueta “más pedido” o similar
- CTA por cada bloque
- microcopy de confianza

### Servicios base sugeridos
- Corte — $300
- Barba — $150
- Cejas — $50
- Corte + barba — $400
- Corte + cejas — $330
- Corte + barba + cejas — $420

### Entregables
- sección limpia y muy escaneable
- sensación de que reservar es fácil

### Aceptación
- no obliga al usuario a ir a historias para saber precios
- ordena comercialmente el negocio mejor que Instagram

### Prompt Codex
```text
Implementa el Patch 02 para la demo de DMJ Studio.

Objetivo:
Crear una sección de servicios que ordene la oferta comercial y haga más fácil convertir que desde Instagram.

Implementa:
1. Sección “Servicios” con diseño premium oscuro.
2. Lista/card de servicios con precios visibles.
3. Destacar uno o dos combos como opción recomendada.
4. Botón/CTA por sección para reservar por WhatsApp.
5. Microcopy que reduzca fricción: reserva rápida, atención personalizada, confirmación directa.
6. Adaptación mobile impecable.

Importante:
- Nada de tablas feas.
- Nada de grids rígidos que se rompan.
- La jerarquía visual tiene que hacer que precios y nombre del servicio se entiendan de inmediato.

Devuélveme cambios listos para commit.
```

---

## Patch 03 — Galería, experiencia del estudio y prueba social

### Objetivo
Subir valor percibido usando visuales reales del rubro.

### Alcance
- mosaico de galería
- interiores del local
- cortes terminados
- herramientas / detalle barber
- sección de testimonios mock
- contador de reputación visual

### Entregables
- bloque aspiracional fuerte
- sensación de calidad y confianza

### Aceptación
- se siente más premium que un simple catálogo
- demuestra estética, experiencia y nivel del estudio

### Prompt Codex
```text
Implementa el Patch 03 para la demo de DMJ Studio.

Objetivo:
Agregar una sección visual potente que eleve valor percibido y haga sentir al negocio como una barbería premium consolidada.

Necesito:
1. Galería responsive estilo editorial/barber premium.
2. Mezclar fotos de cortes, interior del estudio y herramientas.
3. Agregar una sección de testimonios/reseñas visualmente fuerte.
4. Incluir una cifra de reputación destacada con apoyo visual.
5. Mantener coherencia con fondo oscuro, bordes sutiles y estética sobria.

Restricciones:
- Nada de carruseles pesados.
- Nada kitsch.
- Que la galería no robe claridad a la conversión.

Devuélveme patch listo para commit.
```

---

## Patch 04 — Cursos 2025 como segunda línea de negocio

### Objetivo
Mostrar que el negocio no solo corta pelo: también forma alumnos.

### Alcance
- sección dedicada a cursos
- beneficios visibles
- CTA pedir info
- visual diferenciado pero coherente
- bloque pensado como oportunidad comercial extra

### Puntos que deben aparecer
- 3 meses
- 1 clase por semana
- grupo de WhatsApp
- diploma al finalizar
- marketing y crecimiento personal

### Entregables
- una sección de cursos que parezca negocio real, no agregado improvisado

### Aceptación
- el lead puede verse reflejado como barbería + formación
- genera una segunda conversación comercial posible

### Prompt Codex
```text
Implementa el Patch 04 para la demo de DMJ Studio.

Objetivo:
Agregar una sección de Cursos 2025 que sirva como segunda vía de conversión sin romper la estética principal.

Implementa:
1. Sección de cursos con headline claro.
2. Lista de beneficios del curso:
   - 3 meses
   - 1 clase por semana
   - grupo de WhatsApp
   - diploma al finalizar
   - marketing y crecimiento personal
3. CTA principal: Pedir info del curso.
4. Diseño coherente con la home, pero con entidad propia.
5. Una mini tarjeta o bloque que haga sentir que esto puede vender bien por WhatsApp.

Restricciones:
- No usar diseño escolar/genérico.
- Tiene que seguir sintiéndose premium.

Devuélveme patch listo para commit.
```

---

## Patch 05 — Flujo de reserva simulado + ubicación + cierre comercial

### Objetivo
Cerrar la demo como herramienta de venta, no solo como landing linda.

### Alcance
- bloque “cómo reservar”
- disponibilidad mock o pasos simples
- ubicación clara
- horario
- CTA final dominante
- sticky CTA móvil

### Entregables
- cierre fuerte
- conversión ordenada
- sensación de practicidad

### Aceptación
- el lead entiende por qué una web así le ordena ventas
- baja la dependencia de responder todo manual por IG

### Prompt Codex
```text
Implementa el Patch 05 para la demo de DMJ Studio.

Objetivo:
Convertir la landing en una pieza claramente comercial mostrando cómo una web puede ordenar reservas y contacto.

Implementa:
1. Sección “Cómo reservar” en 3 pasos simple y visual.
2. Mini bloque mock de disponibilidad o agenda visual sin backend.
3. Bloque de ubicación con dirección visible.
4. Horarios de atención mock editables en data.
5. CTA final muy fuerte hacia WhatsApp.
6. Sticky CTA móvil con dos acciones:
   - Reservar
   - Cursos

Restricciones:
- Nada complejo técnicamente.
- Todo debe ser editable desde data local.
- La prioridad es claridad comercial.

Devuélveme patch listo para commit.
```

---

## Patch 06 — Pulido final para presentar al lead

### Objetivo
Llevar la demo de “correcta” a “quiero esto para mi negocio”.

### Alcance
- revisión de espaciados
- consistencia tipográfica
- mejoras mobile
- microanimaciones suaves
- mejora de botones
- placeholders finales
- deploy en Vercel
- revisión SEO básica y Open Graph

### Entregables
- demo final presentable
- lista para screenshot, video y envío por WhatsApp

### Aceptación
- visualmente sólida en desktop y mobile
- transmite criterio profesional
- no tiene detalles que rompan confianza

### Prompt Codex
```text
Implementa el Patch 06 de pulido final para la demo de DMJ Studio.

Objetivo:
Dejar la landing lista para mostrar a un lead real por WhatsApp, con nivel visual y de detalle suficiente para causar impacto.

Haz una pasada completa de polish:
1. Ajustar espaciados, jerarquías, consistencia tipográfica y ritmo visual.
2. Mejorar estados hover/focus/active.
3. Añadir microanimaciones suaves y sobrias donde aporten valor.
4. Revisar mobile first en toda la landing.
5. Optimizar placeholders/imágenes para que el conjunto se vea premium.
6. Revisar metadata, Open Graph y detalles finales para deploy.
7. Dejar el proyecto listo para Vercel sin dependencias raras.

Restricciones:
- No convertir esto en una app.
- No tocar la arquitectura más de lo necesario.
- El foco es impacto comercial.

Devuélveme patch final listo para commit + checklist breve de verificación.
```

---

## 6. Orden recomendado de implementación

1. Patch 00 — Bootstrap y base
2. Patch 01 — Hero + CTA + prueba social
3. Patch 02 — Servicios + precios
4. Patch 03 — Galería + reseñas
5. Patch 04 — Cursos
6. Patch 05 — Reserva + ubicación + sticky CTA
7. Patch 06 — Pulido final + deploy

---

## 7. Contenido mínimo que debe existir en data local

```ts
brand = {
  name: "DMJ Studio",
  category: "Barbería",
  city: "Centro, Montevideo",
  address: "18 de Julio 1710 esq. Magallanes",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=59896963686&text=Hola+DMJ+Studio%21+Quiero+agendar+un+turno.",
  phone: "+598 96 963 686",
  instagram: "https://www.instagram.com/dym_studiobarber/",
  rating: 4.9,
  reviews: 358,
}
```

Servicios base:
- Corte — 300
- Barba — 150
- Cejas — 50
- Corte + barba — 400
- Corte + cejas — 330
- Corte + barba + cejas — 420

Curso:
- 3 meses
- 1 clase por semana
- grupo de WhatsApp
- diploma al finalizar
- marketing y crecimiento personal

---

## 8. Qué tiene que sentir el lead al ver la demo

- “Esto me posiciona mejor.”
- “Esto ordena reservas.”
- “Esto me hace ver más profesional.”
- “Esto me sirve también para vender cursos.”
- “Instagram solo no me deja mostrar todo tan claro.”

---

## 9. Riesgos a evitar

- hacer una landing genérica tipo startup
- exagerar efectos visuales y perder sobriedad
- ocultar precios
- esconder el CTA principal
- meter demasiadas secciones sin tensión comercial
- usar copy demasiado técnico o demasiado vendedor
- sobrecargar con funcionalidades falsas

---

## 10. Criterio de éxito

La demo será buena si logra estas tres cosas:
1. se entiende en menos de 10 segundos
2. se ve claramente mejor organizada que el perfil de Instagram solo
3. hace natural la conversación comercial posterior

