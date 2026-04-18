"use client";

import { useState } from "react";
import Image from "next/image";
import type { Brand } from "@/src/data/brand";

type HeroSectionProps = {
  brand: Brand;
};

export function HeroSection({ brand }: HeroSectionProps) {
  const [showImageFallback, setShowImageFallback] = useState(false);

  return (
    <section className="card-premium relative overflow-hidden">
      <picture className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={brand.hero.imageUrl}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </picture>

      <div aria-hidden="true" className="absolute inset-0 bg-black/65" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 22% 18%, rgba(120,161,224,0.25), transparent 50%), radial-gradient(circle at 84% 72%, rgba(202,45,49,0.18), transparent 45%)",
        }}
      />

      <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
        <div className="max-w-2xl animate-enter-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent-cool)]" />
            {brand.name} · {brand.contact.whatsappLabel}
          </div>

          <p className="eyebrow mt-6">{brand.hero.eyebrow}</p>
          <h1 className="heading-display mt-3 text-balance text-4xl leading-[1.03] text-[var(--color-title)] sm:text-5xl lg:text-6xl">
            {brand.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-zinc-200/85 sm:text-base">
            {brand.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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

          <div className="mt-7 max-w-md overflow-hidden rounded-[var(--radius-sm)] border border-white/10 bg-[rgba(12,16,23,0.7)] lg:hidden">
            {showImageFallback ? (
              <p className="placeholder-frame">{brand.hero.imageFallbackText}</p>
            ) : (
              <Image
                src={brand.hero.imageUrl}
                alt={brand.hero.imageAlt}
                width={800}
                height={533}
                className="h-auto w-full object-cover"
                sizes="100vw"
                onError={() => setShowImageFallback(true)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
