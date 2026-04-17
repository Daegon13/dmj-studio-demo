import { brand } from "@/src/data/brand";

export function VisualFooter() {
  return (
    <footer className="visual-footer card-premium animate-enter-4 p-6 sm:p-8" aria-label="Pie de marca visual">
      <div className="visual-footer-grid">
        <div>
          <p className="eyebrow">{brand.footer.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--color-title)] sm:text-3xl">{brand.footer.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {brand.footer.description}
          </p>
        </div>

        <div className="glass-panel p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">Contacto rápido</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-soft)]">
            <li>{brand.name}</li>
            <li>{brand.address}</li>
            <li>{brand.mapReference}</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href={brand.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {brand.contact.whatsappLabel}
            </a>
            <a href={brand.contact.coursesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {brand.contact.coursesLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
