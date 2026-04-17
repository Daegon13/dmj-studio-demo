import { brand } from "@/src/data/brand";

export default function Home() {
  return (
    <main className="shell py-8 sm:py-10">
      <section className="hero-grid card-premium relative overflow-hidden p-6 sm:p-8 lg:p-12">
        <div className="ring-light pointer-events-none absolute right-[-3rem] top-[-3rem] h-56 w-56 rounded-full" />
        <div className="barber-pole pointer-events-none absolute bottom-[-5rem] left-[36%] h-60 w-52 -rotate-12 rounded-full opacity-70" />
        <div className="chrome-glow pointer-events-none absolute left-[-6rem] top-[35%] h-44 w-44 rounded-full" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {brand.hero.eyebrow} · {brand.zone}
          </p>
          <h1 className="heading-display mt-4 max-w-2xl text-4xl leading-[1.08] text-[var(--color-title)] sm:text-5xl lg:text-6xl">
            {brand.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {brand.hero.subheadline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {brand.hero.primaryCtaLabel}
            </a>
            <a href={brand.hero.coursesUrl} className="btn btn-secondary">
              {brand.hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--color-text-soft)]">
            <span className="text-[var(--color-title)]">★ {brand.rating}</span>
            <span>·</span>
            <span>{brand.reviewsCount} reseñas</span>
            <span>·</span>
            <span>{brand.address}</span>
          </div>
        </div>

        <aside className="glass-panel relative z-10 mt-8 p-5 sm:p-6 lg:mt-0">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Posicionamiento</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
            {brand.positioning.map((phrase) => (
              <li key={phrase} className="flex gap-2 leading-relaxed">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{phrase}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {brand.services.map((service) => (
          <article key={service} className="glass-panel p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Servicio</p>
            <h2 className="mt-3 text-xl font-semibold text-[var(--color-title)]">{service}</h2>
            <p className="mt-2 text-sm text-[var(--color-text-soft)]">
              Técnica precisa, terminación prolija y asesoría para mantener tu estilo.
            </p>
          </article>
        ))}
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Estética del estudio</p>
          <h2 className="heading-display mt-3 text-3xl text-[var(--color-title)] sm:text-4xl">
            Negro grafito, detalles cromados y luz de ring para mostrar cortes reales
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            La experiencia visual transmite barbería urbana moderna: espejos, máquinas, tijeras y acabado premium
            con un acento rojo puntual para reforzar marca y llamados a la acción.
          </p>
        </article>
        <article className="glass-panel p-6 sm:p-8">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">Confianza</h3>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
            {brand.trust.map((item) => (
              <li key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
          <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-6 w-full">
            Reservar por WhatsApp
          </a>
        </article>
      </section>
      <section id="cursos" className="mt-5 pb-8">
        <article className="card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Formación profesional</p>
          <h2 className="heading-display mt-3 text-3xl text-[var(--color-title)] sm:text-4xl">
            Cortes, barba, cejas y formación profesional
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--color-text-soft)] sm:text-base">
            Sumá una sección de cursos con cupos y horarios para transformar la web en un canal de ventas completo.
          </p>
          <div className="mt-6">
            <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Consultar por cursos
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
