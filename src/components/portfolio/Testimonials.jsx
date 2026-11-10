import React from "react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { portfolio } from "@/portfolio.config";

export default function Testimonials() {
  const { items, eyebrow, heading } = portfolio.testimonials;
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-card/40 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-4">
              {eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              <RichText text={heading} />
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} y={32}>
              <figure className="h-full rounded-[2rem] border border-border bg-background p-8 flex flex-col">
                <span className="font-heading text-6xl leading-none text-accent/40 mb-4">“</span>
                <blockquote className="text-lg leading-relaxed text-foreground/85 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-foreground text-background font-heading text-lg">
                    {t.name[0]}
                  </span>
                  <div>
                    <div className="font-heading text-lg leading-tight">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}