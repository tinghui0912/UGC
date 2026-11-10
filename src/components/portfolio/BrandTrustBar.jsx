import React from "react";
import Reveal from "./Reveal";
import { portfolio } from "@/portfolio.config";

export default function BrandTrustBar() {
  const { brands, stats, heading } = portfolio.trust;
  if (brands.length === 0 && stats.length === 0) return null;

  return (
    <section id="trust" className="py-20 md:py-24 border-y border-border/60 bg-card/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {heading && (
          <Reveal>
            <p className="text-center text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-10">
              {heading}
            </p>
          </Reveal>
        )}

        {brands.length > 0 && (
          <Reveal delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              {brands.map((b) => (
                <span
                  key={b.name}
                  className="font-heading text-xl md:text-2xl tracking-wide text-foreground/45 hover:text-foreground transition-colors duration-300"
                >
                  {b.logo ? (
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="h-7 md:h-9 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  ) : (
                    b.name
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {stats.length > 0 && (
          <Reveal delay={0.1}>
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden ${
                brands.length > 0 ? "mt-14" : ""
              }`}
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-background px-6 py-8 text-center">
                  <div className="font-heading text-4xl md:text-5xl tracking-tight">{s.value}</div>
                  <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}