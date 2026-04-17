import Image from "next/image";
import { HeroSection } from "@/src/components/landing/HeroSection";
import { ServicesGrid } from "@/src/components/landing/ServicesGrid";
import { TestimonialsSection } from "@/src/components/landing/TestimonialsSection";
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

      <ServicesGrid />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="card-premium animate-enter-3 p-6 sm:p-8">
          <p className="eyebrow">Ubicación y horario</p>
          <h2 className="section-title mt-3">Vení directo, sin vueltas</h2>

          <div className="location-frame mt-5 overflow-hidden">
            <Image
              src={brand.location.imageUrl}
              alt={brand.location.imageAlt}
              width={1400}
              height={920}
              className="location-image"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>

          <div className="location-details mt-4">
            <p>
              <strong>Dirección</strong>
              <span>{brand.address}</span>
            </p>
            <p>
              <strong>Barrio</strong>
              <span>{brand.location.neighborhood}</span>
            </p>
            <p>
              <strong>Referencia</strong>
              <span>{brand.location.landmark}</span>
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
          <a
            href={brand.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-5 w-full sm:w-auto"
          >
            Ver en Google Maps
          </a>
        </article>

        <aside className="glass-panel animate-enter-3 availability-secondary p-5 sm:p-6" aria-label="Disponibilidad de agenda demo">
          <p className="eyebrow">Agenda visual mock</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--color-title)]">{brand.availability.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">{brand.availability.caption}</p>

          <ul className="mt-4 space-y-2.5">
            {brand.availability.slots.map((slot) => (
              <li key={slot.time} className="slot-row">
                <span className="slot-time">{slot.time}</span>
                <span className={`slot-chip ${slotClassByStatus[slot.status]}`}>{slot.status}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <TestimonialsSection />

      <section className="card-premium cta-strong animate-enter-4 p-6 text-center sm:p-10">
        <div className="cta-aura pointer-events-none" />
        <p className="eyebrow text-white/75">Cierre comercial</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">{brand.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-pretty text-white/85 sm:text-base">{brand.finalCta.description}</p>

        <div className="cta-actions mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={brand.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-w-64 sm:min-w-72"
          >
            {brand.finalCta.primaryLabel}
          </a>
          <a
            href={brand.contact.coursesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary min-w-52 border-white/35 bg-white/8 text-white"
          >
            {brand.contact.coursesLabel}
          </a>
        </div>
      </section>

      <aside className="mobile-sticky-cta" aria-label="Accesos rápidos">
        <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Reservar ahora
        </a>
        <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Cursos
        </a>
      </aside>
    </main>
  );
}
