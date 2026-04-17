import { brand } from "@/src/data/brand";

export default function Home() {
  return (
    <main className="shell py-10 sm:py-14">
      <section className="card-premium relative overflow-hidden p-6 sm:p-8 lg:p-12">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(199,43,43,0.32),transparent_70%)]" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(43,106,199,0.2),transparent_72%)]" />

        <div className="relative z-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {brand.hero.eyebrow} · {brand.zone}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-title)] sm:text-5xl">
            {brand.hero.headline}
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {brand.hero.subheadline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {brand.hero.primaryCtaLabel}
            </a>
            <a href={brand.hero.coursesUrl} className="btn btn-secondary">
              {brand.hero.secondaryCtaLabel}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-text-soft)]">
            <span className="text-[var(--color-title)]">★ {brand.rating}</span>
            <span>·</span>
            <span>{brand.reviewsCount} reseñas</span>
            <span>·</span>
            <span>{brand.address}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
