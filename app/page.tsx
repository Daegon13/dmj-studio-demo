import { HeroSection } from "@/src/components/landing/HeroSection";
import { brand } from "@/src/data/brand";

const slotClassByStatus: Record<(typeof brand.availability.slots)[number]["status"], string> = {
  Disponible: "slot-available",
  "Último lugar": "slot-warning",
  Completo: "slot-full",
};

export default function Home() {
  return (
    <main className="shell space-y-7 py-6 pb-32 sm:space-y-10 sm:py-10 sm:pb-10 lg:space-y-12 lg:py-14">
      <HeroSection />

      <section className="card-premium animate-enter-2 p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">Cómo reservar</p>
        <h2 className="section-title mt-3">Tres pasos para cerrar un turno</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {brand.bookingSteps.map((step, index) => (
            <article key={step.title} className="glass-panel interactive-panel p-5">
              <p className="step-badge">Paso {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-[var(--color-title)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="card-premium animate-enter-3 p-6 sm:p-8">
          <p className="eyebrow">Agenda visual mock</p>
          <h2 className="section-title mt-3">{brand.availability.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">{brand.availability.caption}</p>

          <ul className="mt-5 space-y-3">
            {brand.availability.slots.map((slot) => (
              <li key={slot.time} className="slot-row">
                <span className="slot-time">{slot.time}</span>
                <span className={`slot-chip ${slotClassByStatus[slot.status]}`}>{slot.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card-premium animate-enter-3 p-6 sm:p-8">
          <p className="eyebrow">Ubicación y horario</p>
          <h2 className="section-title mt-3">Vení directo, sin vueltas</h2>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-text-soft)]">
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
          <p className="mt-4 text-xs leading-relaxed text-[var(--color-muted)]">{brand.businessHours.note}</p>
        </article>
      </section>

      <section className="card-premium cta-strong animate-enter-4 p-6 text-center sm:p-10">
        <p className="eyebrow text-white/75">Cierre comercial</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">{brand.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-pretty text-white/85 sm:text-base">{brand.finalCta.description}</p>

        <a
          href={brand.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-7 min-w-64 sm:min-w-72"
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
