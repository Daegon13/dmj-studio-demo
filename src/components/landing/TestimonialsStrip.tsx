import Image from "next/image";
import type { Brand } from "@/src/data/brand";

type TestimonialsStripProps = {
  brand: Brand;
};

export function TestimonialsStrip({ brand }: TestimonialsStripProps) {
  return (
    <section className="card-premium animate-enter-4 overflow-hidden p-6 sm:p-8 lg:p-10">
      <p className="eyebrow">{brand.testimonials.eyebrow}</p>
      <h2 className="section-title mt-3">{brand.testimonials.title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
        {brand.testimonials.description}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {brand.testimonials.items.map((testimonial) => (
          <article key={testimonial.author} className="glass-panel h-full p-5">
            <p className="text-sm text-zinc-300">★★★★★</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-soft)]">“{testimonial.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-[var(--color-title)]">— {testimonial.author}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">{testimonial.meta}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {brand.testimonials.imageStrip.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-[var(--radius-sm)] border border-white/10">
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1200}
              loading="lazy"
              className="h-28 w-full object-cover sm:h-36"
              sizes="(min-width: 1024px) 22vw, 33vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
