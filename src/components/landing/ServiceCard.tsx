import Image from "next/image";
import { brand } from "@/src/data/brand";

type Service = (typeof brand.services.items)[number];

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card interactive-panel">
      <div className="service-image-wrap">
        <Image
          src={service.image}
          alt={`Imagen de ${service.name}`}
          width={720}
          height={540}
          className="service-image"
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 42vw, 100vw"
        />
        {service.popular ? <span className="service-chip-popular">Más pedido</span> : null}
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-[var(--color-title)]">{service.name}</h3>
        <p className="mt-2 text-sm text-[var(--color-text-soft)]">Duración estimada: {service.duration}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]">Precio desde</p>
          <p className="text-lg font-semibold text-[var(--color-title)]">{service.price}</p>
        </div>
      </div>
    </article>
  );
}
