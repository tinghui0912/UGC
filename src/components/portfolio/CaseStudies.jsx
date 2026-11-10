import React from "react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { portfolio } from "@/portfolio.config";

function MiniChart({ data }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-2 h-24">
      {data.map((d, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-accent/80" style={{ height: `${(d / max) * 100}%` }} />
      ))}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="font-heading text-4xl md:text-5xl tracking-tight">{value}</div>
      <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

function CaseMedia({ item, alt }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        muted
        loop
        playsInline
        controls
        preload="none"
        className="w-full h-full object-cover"
      />
    );
  }
  return <img src={item.src} alt={alt} className="w-full h-full object-cover" />;
}

export default function CaseStudies() {
  const { items, eyebrow, heading } = portfolio.caseStudies;
  if (items.length === 0) return null;

  return (
    <section id="case-studies" className="py-24 md:py-36 bg-card/40 border-y border-border/60">
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

        <div className="space-y-8 md:space-y-10">
          {items.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.05} y={36}>
              <article className="rounded-[2rem] border border-border bg-background overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {/* Visual side */}
                <div className="lg:col-span-5 p-6 md:p-8 bg-secondary/50">
                  <div className="flex items-center gap-3 mb-6">
                    {c.logo ? (
                      <img src={c.logo} alt={c.brand} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <span className="grid place-items-center w-10 h-10 rounded-full bg-foreground text-background font-heading text-lg">
                        {c.brand[0]}
                      </span>
                    )}
                    <span className="font-heading text-xl tracking-tight">{c.brand}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="text-foreground">Objective — </span>
                    {c.objective}
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {c.content.map((m, j) => (
                      <div key={j} className="aspect-[9/16] rounded-xl overflow-hidden bg-secondary">
                        <CaseMedia item={m} alt={`${c.brand} campaign asset ${j + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data side */}
                <div className="lg:col-span-7 p-6 md:p-10">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-border">
                    {c.metrics.map((m) => (
                      <Metric key={m.label} {...m} />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                        Strategy
                      </p>
                      <p className="text-foreground/80 leading-relaxed">{c.strategy}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                        Analytics — weekly views
                      </p>
                      <div className="rounded-xl border border-border p-4 bg-background">
                        <MiniChart data={c.chart} />
                        <div className="mt-3 flex justify-between text-[10px] tracking-widest uppercase text-muted-foreground">
                          <span>Wk 1</span>
                          <span>Wk 8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}