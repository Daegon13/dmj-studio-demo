import Image from "next/image";
import { brand } from "@/src/data/brand";

const slotClassByStatus: Record<(typeof brand.availability.slots)[number]["status"], string> = {
  Disponible: "slot-available",
  "Último lugar": "slot-warning",
  Completo: "slot-full",
};

export default function Home() {
  return (
    <main className="shell space-y-8 py-8 pb-32 sm:space-y-10 sm:py-10 sm:pb-10 lg:space-y-12 lg:py-14">
      <section className="hero card-premium relative overflow-hidden p-6 sm:p-10 lg:p-14">
        <div className="spotlight pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full" />
        <div className="chrome-haze pointer-events-none absolute -left-16 bottom-8 h-40 w-40 rounded-full" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <article>
            <p className="eyebrow">{brand.hero.eyebrow}</p>
            <h1 className="heading-display mt-4 text-4xl leading-[1.05] text-[var(--color-title)] sm:text-5xl lg:text-6xl">
              {brand.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
              {brand.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={brand.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {brand.contact.whatsappLabel}
              </a>
              <a
                href={brand.contact.coursesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {brand.hero.secondaryCtaLabel}
              </a>
            </div>
          </article>

          <aside className="glass-panel space-y-5 p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <Image
                src={brand.placeholders.logo}
                alt={`Logo placeholder de ${brand.name}`}
                width={64}
                height={64}
                className="rounded-xl border border-white/10"
                priority
              />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{brand.businessLine}</p>
                <p className="text-lg font-semibold text-[var(--color-title)]">{brand.name}</p>
              </div>
            </div>

            <div className="divider" />

            <ul className="space-y-2 text-sm text-[var(--color-text-soft)]">
              <li>
                <strong className="text-[var(--color-title)]">Zona:</strong> {brand.zone}
              </li>
              <li>
                <strong className="text-[var(--color-title)]">Dirección:</strong> {brand.address}
              </li>
              <li>
                <strong className="text-[var(--color-title)]">Rating:</strong> {brand.socialProof.rating}/5 ·{" "}
                {brand.socialProof.reviewsCount} reseñas
              </li>
            </ul>

            <p className="text-xs text-[var(--color-muted)]">{brand.socialProof.note}.</p>
            <p className="placeholder-frame">{brand.placeholders.heroFrame}</p>
          </aside>
        </div>
      </section>

      <section className="card-premium p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">Cómo reservar</p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)] sm:text-3xl">Tres pasos para cerrar un turno</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {brand.bookingSteps.map((step, index) => (
            <article key={step.title} className="glass-panel p-5">
              <p className="step-badge">Paso {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--color-title)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="card-premium p-6 sm:p-8">
          <p className="eyebrow">Agenda visual mock</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">{brand.availability.title}</h2>
          <p className="mt-2 text-sm text-[var(--color-text-soft)]">{brand.availability.caption}</p>

          <ul className="mt-5 space-y-3">
            {brand.availability.slots.map((slot) => (
              <li key={slot.time} className="slot-row">
                <span className="slot-time">{slot.time}</span>
                <span className={`slot-chip ${slotClassByStatus[slot.status]}`}>{slot.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card-premium p-6 sm:p-8">
          <p className="eyebrow">Ubicación y horario</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)]">Vení directo, sin vueltas</h2>

          <div className="mt-4 space-y-3 text-sm text-[var(--color-text-soft)]">
            <p>
              <strong className="text-[var(--color-title)]">Dirección:</strong> {brand.address}
            </p>
            <p>
              <strong className="text-[var(--color-title)]">Referencia:</strong> {brand.mapReference}
            </p>
          </div>

          <div className="divider my-5" />

          <h3 className="text-base font-semibold text-[var(--color-title)]">{brand.businessHours.title}</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-soft)]">
            {brand.businessHours.rows.map((row) => (
              <li key={row.day} className="hour-row">
                <span>{row.day}</span>
                <strong className="text-[var(--color-title)]">{row.hours}</strong>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[var(--color-muted)]">{brand.businessHours.note}</p>
        </article>
      </section>

      <section className="card-premium cta-strong p-6 text-center sm:p-10">
        <p className="eyebrow">Cierre comercial</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{brand.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">{brand.finalCta.description}</p>

        <a
          href={brand.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-7 min-w-72"
        >
          {brand.finalCta.primaryLabel}
        </a>
      </section>

      <aside className="mobile-sticky-cta" aria-label="Accesos rápidos">
        <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Reservar
        </a>
        <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Cursos
        </a>
      </aside>
    </main>
  );
}
