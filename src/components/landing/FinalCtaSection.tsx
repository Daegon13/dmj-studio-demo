import { brand } from "@/src/data/brand";

export function FinalCtaSection() {
  return (
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
  );
}
