import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { portfolio } from "@/portfolio.config";

export default function Services() {
  const { items, eyebrow, heading, footnote } = portfolio.services;
  if (items.length === 0) return null;

  return (
    <section id="services" className="py-24 md:py-36">
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
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} y={32}>
              <div
                className={`group h-full rounded-[2rem] p-8 md:p-9 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  s.featured
                    ? "bg-foreground text-background border border-foreground"
                    : "bg-card border border-border hover:border-foreground/30"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`text-[11px] tracking-[0.3em] uppercase ${
                      s.featured ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {s.tag}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      s.featured ? "text-background/70" : "text-muted-foreground"
                    }`}
                  />
                </div>

                <h3 className="font-heading text-3xl md:text-4xl tracking-tight leading-none">
                  {s.title}
                </h3>
                <p
                  className={`mt-4 leading-relaxed ${
                    s.featured ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {s.desc}
                </p>

                <div
                  className={`mt-8 pt-6 border-t ${
                    s.featured ? "border-background/20" : "border-border"
                  }`}
                >
                  <ul className="space-y-3">
                    {s.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                            s.featured ? "bg-background/60" : "bg-accent"
                          }`}
                        />
                        <span className={s.featured ? "text-background/85" : "text-foreground/80"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {s.price && (
                  <div
                    className={`mt-6 font-heading text-2xl tracking-tight ${
                      s.featured ? "text-background" : "text-foreground"
                    }`}
                  >
                    {s.price}
                  </div>
                )}

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center text-sm tracking-wide ${
                    s.featured ? "text-background hover:text-accent" : "text-foreground hover:text-accent"
                  } transition-colors`}
                >
                  Request details →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {footnote && (
          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-muted-foreground">{footnote}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}