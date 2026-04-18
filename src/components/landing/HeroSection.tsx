"use client";

import { useState } from "react";
import Image from "next/image";
import { brand } from "@/src/data/brand";

export function HeroSection() {
  const [showImageFallback, setShowImageFallback] = useState(false);

  return (
    <section className="hero card-premium relative overflow-hidden p-6 sm:p-10 lg:p-14">
      <div className="spotlight pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full" />
      <div className="chrome-haze pointer-events-none absolute -left-16 bottom-8 h-40 w-40 rounded-full" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
        <article className="animate-enter-1">
          <p className="eyebrow">{brand.hero.eyebrow}</p>
          <h1 className="heading-display mt-4 text-balance text-4xl leading-[1.02] text-[var(--color-title)] sm:text-5xl lg:text-6xl">
            {brand.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--color-text-soft)] sm:text-base">
            {brand.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={brand.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {brand.contact.whatsappLabel}
            </a>
            <a
              href={brand.contact.coursesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {brand.hero.secondaryCtaLabel}
            </a>
          </div>
        </article>

        <aside className="glass-panel animate-enter-2 space-y-5 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <Image
              src={brand.placeholders.logo}
              alt={`Logo placeholder de ${brand.name}`}
              width={64}
              height={64}
              className="rounded-xl border border-white/10"
              priority
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{brand.businessLine}</p>
              <p className="text-lg font-semibold text-[var(--color-title)]">{brand.name}</p>
            </div>
          </div>

          <div className="divider" />

          <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
            <li>
              <strong className="text-[var(--color-title)]">Zona:</strong> {brand.zone}
            </li>
            <li>
              <strong className="text-[var(--color-title)]">Dirección:</strong> {brand.address}
            </li>
            <li>
              <strong className="text-[var(--color-title)]">Rating:</strong> {brand.socialProof.rating}/5 · {" "}
              {brand.socialProof.reviewsCount} reseñas
            </li>
          </ul>

          <p className="text-xs leading-relaxed text-[var(--color-muted)]">{brand.socialProof.note}.</p>

          <div className="overflow-hidden rounded-[var(--radius-sm)] border border-white/10 bg-[rgba(12,16,23,0.7)]">
            {showImageFallback ? (
              <p className="placeholder-frame">{brand.hero.imageFallbackText}</p>
            ) : (
              <Image
                src={brand.hero.imageUrl}
                alt={brand.hero.imageAlt}
                width={800}
                height={533}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 32vw, 100vw"
                onError={() => setShowImageFallback(true)}
              />
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
