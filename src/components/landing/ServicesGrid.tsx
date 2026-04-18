import { ServiceCard } from "@/src/components/landing/ServiceCard";
import type { Brand } from "@/src/data/brand";

type ServicesGridProps = {
  brand: Brand;
};

export function ServicesGrid({ brand }: ServicesGridProps) {
  return (
    <section className="card-premium animate-enter-3 p-6 sm:p-8 lg:p-10">
      <p className="eyebrow">{brand.services.eyebrow}</p>
      <h2 className="section-title mt-3">{brand.services.title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
        {brand.services.description}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {brand.services.items.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}
