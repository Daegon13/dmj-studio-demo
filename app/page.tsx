import { brand } from "@/src/data/brand";

export default function Home() {
  return (
    <main className="shell py-10 sm:py-14">
      <section className="card-premium relative overflow-hidden p-6 sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(199,43,43,0.32),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,106,199,0.2),transparent_72%)]" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {brand.hero.eyebrow} · {brand.zone}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-title)] sm:text-5xl">
            {brand.hero.headline}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {brand.hero.subheadline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {brand.hero.primaryCtaLabel}
            </a>
            <a href={brand.hero.coursesUrl} className="btn btn-secondary">
              {brand.hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-text-soft)]">
            <span className="text-[var(--color-title)]">★ {brand.rating}</span>
            <span>·</span>
            <span>{brand.reviewsCount} reseñas</span>
            <span>·</span>
            <span>{brand.address}</span>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <article className="card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Lectura comercial del lead
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">
            Fortalezas detectadas
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)] sm:text-base">
            <li>• reputación alta</li>
            <li>• ubicación fuerte sobre 18 de Julio</li>
            <li>• marca visual ya definida</li>
            <li>• propuesta clara de servicios</li>
            <li>• contenido real en Instagram</li>
            <li>• posibilidad de vender tanto cortes como cursos</li>
          </ul>
        </article>

        <article className="card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Brecha a explotar
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">
            Oportunidad de conversión
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)] sm:text-base">
            <li>• no hay web propia visible</li>
            <li>• no existe una experiencia clara de conversión fuera de Instagram</li>
            <li>• la propuesta comercial hoy depende demasiado del perfil social</li>
            <li>
              • falta una pieza que ordene: qué hacen, cuánto cuesta, dónde están,
              cómo reservar y por qué elegirlos
            </li>
          </ul>
        </article>
      </section>

      <section className="thesis-card mt-4 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Tesis comercial de la demo
        </p>
        <p className="mt-3 max-w-4xl text-lg font-medium leading-relaxed text-[var(--color-title)] sm:text-xl">
          La demo no debe parecer una web institucional. Debe parecer una{" "}
          <span className="text-white">máquina de captar reservas</span> con estética
          de barbería premium y con un segundo CTA para cursos.
        </p>
      </section>
    </main>
  );
}
