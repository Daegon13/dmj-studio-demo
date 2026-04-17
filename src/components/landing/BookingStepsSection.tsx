import { brand } from "@/src/data/brand";

export function BookingStepsSection() {
  return (
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
  );
}
