import Image from "next/image";
import { brand } from "@/src/data/brand";

const slotClassByStatus: Record<(typeof brand.availability.slots)[number]["status"], string> = {
  Disponible: "slot-available",
  "Último lugar": "slot-warning",
  Completo: "slot-full",
};

export function LocationAvailabilitySection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <article className="card-premium animate-enter-3 p-6 sm:p-8">
        <p className="eyebrow">Ubicación y horario</p>
        <h2 className="section-title mt-3">Vení directo, sin vueltas</h2>

        <div className="location-frame mt-5 overflow-hidden">
          <Image
            src={brand.location.imageUrl}
            alt={brand.location.imageAlt}
            width={1536}
            height={1024}
            className="location-image"
            sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 45vw, 100vw"
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
  );
}
