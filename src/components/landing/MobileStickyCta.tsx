import { brand } from "@/src/data/brand";

export function MobileStickyCta() {
  return (
    <aside className="mobile-sticky-cta" aria-label="Accesos rápidos">
      <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Reservar ahora
      </a>
      <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        Cursos
      </a>
    </aside>
  );
}
