import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { portfolio } from "@/portfolio.config";

export default function About() {
  const a = portfolio.about;
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5" y={36}>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]">
            {a.mediaType === "video" ? (
              <video
                src={a.media}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={a.media}
                alt={`Behind the scenes of ${portfolio.creator.name}'s content creation workspace`}
                fittingType="fill"
                className="w-full h-full"
              />
            )}
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-5">
              About
            </p>
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
              <RichText text={a.heading} />
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground max-w-xl">
              {a.bio.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </Reveal>

          {a.interests.length > 0 && (
            <Reveal delay={0.15}>
              <div className="mt-12">
                <p className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-6">
                  {a.interestsHeading}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {a.interests.map((t) => (
                    <div
                      key={t.title}
                      className="group rounded-2xl border border-border bg-card/50 p-5 hover:border-foreground/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <h3 className="font-heading text-xl">{t.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}