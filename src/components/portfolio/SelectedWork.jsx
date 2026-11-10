import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { portfolio } from "@/portfolio.config";

function WorkCard({ item, index }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="group">
        <div
          onClick={toggle}
          className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-secondary cursor-pointer shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]"
        >
          <video
            ref={ref}
            src={item.video}
            poster={item.poster}
            playsInline
            muted
            loop
            preload="none"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 rounded-full bg-white/85 text-foreground text-[10px] tracking-[0.2em] uppercase backdrop-blur">
              {item.category}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid place-items-center w-14 h-14 rounded-full bg-white/90 text-foreground shadow-lg scale-100 opacity-100 md:scale-90 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 transition-all duration-500">
              {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-heading text-xl md:text-2xl tracking-tight">{item.title}</h3>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
              {item.contentType}
            </span>
          </div>
          {item.description && (
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          )}
          {item.results && (
            <div className="mt-3 flex items-center gap-2 text-sm text-foreground/85">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-medium">{item.results}</span>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function SelectedWork() {
  const { items, eyebrow, heading, intro } = portfolio.work;
  if (items.length === 0) return null;

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-4">
                {eyebrow}
              </p>
              <h2 className="font-heading text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance max-w-2xl">
                <RichText text={heading} />
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">{intro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, i) => (
            <WorkCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}