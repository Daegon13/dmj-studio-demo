import type { Brand } from "@/src/data/brand";

type MobileStickyCtaProps = {
  brand: Brand;
};

export function MobileStickyCta({ brand }: MobileStickyCtaProps) {
  return (
    <aside className="mobile-sticky-cta" aria-label={`Accesos rápidos de ${brand.name}`}>
      <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        {brand.contact.coursesLabel}
      </a>
      <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        {brand.contact.whatsappLabel}
      </a>
    </aside>
  );
}
