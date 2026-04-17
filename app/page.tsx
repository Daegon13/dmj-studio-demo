import { brand } from "@/src/data/brand";

export default function Home() {
  return (
    <>
      <main className="shell py-8 sm:py-10">
        <section className="hero-grid card-premium relative overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="ring-light pointer-events-none absolute right-[-3rem] top-[-3rem] h-56 w-56 rounded-full" />
          <div className="barber-pole pointer-events-none absolute bottom-[-5rem] left-[36%] h-60 w-52 -rotate-12 rounded-full opacity-70" />
          <div className="chrome-glow pointer-events-none absolute left-[-6rem] top-[35%] h-44 w-44 rounded-full" />

          <div className="relative z-10">
            <div className="social-proof-strip glass-panel mb-5 flex flex-wrap items-center gap-2 p-3 text-xs sm:text-sm">
              <span className="pill">★ {brand.rating}/5</span>
              <span>{brand.reviewsCount}+ reseñas reales</span>
              <span className="hidden sm:inline">·</span>
              <span className="text-[var(--color-title)]">{brand.name} · {brand.category}</span>
            </div>
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
              <span className="text-[var(--color-accent)]">Precios claros desde ${brand.startingPrice}</span>
            </div>
          </div>

          <aside className="glass-panel relative z-10 mt-8 p-5 sm:p-6 lg:mt-0">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Hecho para convertir</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
              {brand.trustBadges.map((badge) => (
                <li key={badge} className="flex gap-2 leading-relaxed">
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2 text-sm">
              <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Cerrar reserva ahora
              </a>
              <a href="#cursos" className="btn btn-secondary">
                Quiero formarme (cursos)
              </a>
            </div>
          </aside>
        </section>

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brand.services.map((service) => (
            <article key={service.name} className="glass-panel p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Servicio destacado</p>
              <h2 className="mt-3 text-xl font-semibold text-[var(--color-title)]">{service.name}</h2>
              <p className="mt-1 text-sm text-[var(--color-accent)]">{service.price}</p>
              <p className="mt-2 text-sm text-[var(--color-text-soft)]">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-3">
          {brand.gallery.map((item) => (
            <article key={item} className="card-premium p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Experiencia / galería</p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">{item}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-soft)]">
                Sección mock pensada para fotos reales que refuercen calidad, ambiente y detalle profesional.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-5 card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Cómo reservar</p>
          <h2 className="heading-display mt-3 text-3xl text-[var(--color-title)] sm:text-4xl">Claridad que convierte</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {brand.bookingSteps.map((step, index) => (
              <article key={step} className="glass-panel p-5">
                <p className="text-sm font-semibold text-[var(--color-title)]">Paso {index + 1}</p>
                <p className="mt-2 text-sm text-[var(--color-text-soft)]">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cursos" className="mt-5 card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Cursos</p>
          <h2 className="heading-display mt-3 text-3xl text-[var(--color-title)] sm:text-4xl">{brand.course.title}</h2>
          <ul className="mt-5 grid gap-3 text-sm text-[var(--color-text-soft)] md:grid-cols-2">
            {brand.course.details.map((detail) => (
              <li key={detail} className="glass-panel p-4">• {detail}</li>
            ))}
          </ul>
          <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-6">
            {brand.course.cta}
          </a>
        </section>

        <section className="mt-5 card-premium p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Prueba social</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">Reputación visible para reducir fricción</h2>
          <p className="mt-2 text-sm text-[var(--color-text-soft)]">{brand.rating} / 5 · {brand.reviewsCount}+ reseñas</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {brand.reviews.map((review) => (
              <article key={review.name} className="glass-panel p-5">
                <p className="text-sm text-[var(--color-text-soft)]">“{review.text}”</p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-title)]">{review.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5 grid gap-4 pb-24 lg:grid-cols-[1fr_1fr]">
          <article className="card-premium p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Ubicación</p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">Centro de Montevideo</h2>
            <p className="mt-3 text-sm text-[var(--color-text-soft)]">{brand.address}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-[var(--color-text-soft)]">
              Mapa mock de referencia para reforzar cercanía y confianza.
            </div>
          </article>

          <article className="card-premium p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Horarios</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)]">
              {brand.schedule.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Reservar ahora
              </a>
              <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Abrir WhatsApp
              </a>
            </div>
          </article>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#090b0f]/95 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex w-full max-w-md gap-2">
          <a href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1">
            Reservar
          </a>
          <a href="#cursos" className="btn btn-secondary flex-1">
            Cursos
          </a>
        </div>
      </div>
    </>
  );
}
