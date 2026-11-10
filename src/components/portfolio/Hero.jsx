import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { portfolio } from "@/portfolio.config";

const heroSocials = portfolio.creator.socials.filter((s) => s.inHero);
const initials =
  `${portfolio.creator.firstName?.[0] ?? ""}.${portfolio.creator.lastName?.[0] ?? ""}`.toLowerCase();

export default function Hero() {
  const c = portfolio.creator;
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ambient oversized type */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-heading italic text-[26vw] leading-none text-foreground/[0.035] select-none whitespace-nowrap">
          creator
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-28 pb-24 lg:py-0">
        {/* Left — identity */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-6"
          >
            {portfolio.hero.eyebrow}
            {c.location ? ` · ${c.location}` : ""}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-medium leading-[0.88] tracking-tight text-[19vw] sm:text-[13vw] lg:text-[9.5rem]"
          >
            {c.firstName}
            <br />
            <span className="italic">{c.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xs sm:text-sm tracking-[0.22em] uppercase text-foreground/70"
          >
            {c.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground text-balance"
          >
            {c.positioning}
          </motion.p>

          {c.niches.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {c.niches.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-border text-sm text-foreground/75 bg-card/50"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={portfolio.hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {portfolio.hero.primaryCta.label}
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={portfolio.hero.secondaryCta.href}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-foreground/25 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              {portfolio.hero.secondaryCta.label}
            </a>
          </motion.div>

          {heroSocials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-7 flex items-center gap-6"
            >
              {heroSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
                >
                  <span className="border-b border-transparent group-hover:border-foreground/40 transition-colors">
                    {s.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[70vw] max-w-[330px] sm:w-[300px] lg:w-[88%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]"
          >
            {c.heroMediaType === "video" ? (
              <video
                src={c.heroMedia}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={c.heroMedia}
                alt={`Editorial portrait of ${portfolio.creator.name}`}
                fittingType="fill"
                className="w-full h-full"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              {c.availability ? (
                <span className="px-3.5 py-1.5 rounded-full bg-white/85 text-foreground text-[11px] tracking-[0.18em] uppercase backdrop-blur">
                  {c.availability}
                </span>
              ) : (
                <span />
              )}
              <span className="font-heading italic text-white text-lg drop-shadow">{initials}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#trust"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-foreground/30 overflow-hidden relative">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-foreground"
            animate={{ y: [-20, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}