import type { Brand } from "@/src/data/brand";

type NoirBlocksSectionProps = {
  brand: Brand;
};

const promiseBlocks = [
  { label: "Promesa", value: "Reservá en 10s" },
  { label: "Precios", value: "Sin sorpresas" },
  { label: "Atención", value: "Puntual y prolija" },
] as const;

const trustBlocks = [
  {
    title: "Turnos sin vueltas",
    description: "Elegís servicio y el WhatsApp ya te deja la reserva lista para confirmar.",
  },
  {
    title: "Equipo con método",
    description: "El flujo visual separa pasos para que el cliente entienda todo sin fricción.",
  },
  {
    title: "Cierre directo",
    description: "El CTA primario lleva al chat con mensaje prearmado y reduce abandonos.",
  },
] as const;

export function NoirBlocksSection({ brand }: NoirBlocksSectionProps) {
  return (
    <section className="dmj-noir-stack animate-enter-2" aria-label="Bloques de estructura Noir adaptados a DMJ">
      <div className="dmj-noir-promises">
        {promiseBlocks.map((block) => (
          <article key={block.label} className="dmj-noir-promise-card">
            <p className="dmj-noir-kicker">{block.label}</p>
            <p className="dmj-noir-value">{block.value}</p>
          </article>
        ))}
      </div>

      <article className="card-premium p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">Confianza</p>
        <h2 className="section-title mt-3">Tres razones simples para elegir DMJ</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
          Bloque inspirado en Noir para reforzar claridad operativa y acelerar la decisión antes de abrir WhatsApp.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {trustBlocks.map((block) => (
            <article key={block.title} className="dmj-noir-trust-card">
              <h3 className="text-base font-semibold text-[var(--color-title)]">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">{block.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {brand.contact.whatsappLabel}
          </a>
          <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {brand.contact.coursesLabel}
          </a>
        </div>
      </article>
    </section>
  );
}
