import React from "react";
import { portfolio } from "@/portfolio.config";

const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M16.5 3c.3 2.1 1.5 3.8 3.5 4.2v2.6c-1.3 0-2.6-.4-3.7-1.1v6.1c0 3.2-2.6 5.7-5.8 5.7S4.7 18 4.7 14.8c0-3 2.3-5.4 5.2-5.7v2.7c-1.4.3-2.5 1.5-2.5 3 0 1.7 1.4 3.1 3.1 3.1s3.1-1.4 3.1-3.1V3h2.9z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
    </svg>
  ),
};

export default function Footer() {
  const f = portfolio.footer;
  const socials = portfolio.creator.socials;

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <a href="#top" className="font-heading text-3xl tracking-tight leading-none">
              {portfolio.creator.firstName}
              <span className="italic"> {portfolio.creator.lastName}</span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">{f.tagline}</p>
            {portfolio.creator.email && (
              <a
                href={`mailto:${portfolio.creator.email}`}
                className="mt-4 inline-block text-foreground hover:text-accent transition-colors"
              >
                {portfolio.creator.email}
              </a>
            )}
          </div>

          {socials.length > 0 && (
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-11 h-11 rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/40 hover:-translate-y-0.5 transition-all"
                >
                  {ICONS[s.platform] ? (
                    ICONS[s.platform]
                  ) : (
                    <span className="font-heading text-base">{s.label[0]}</span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {portfolio.creator.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {f.legal && <span>{f.legal}</span>}
            {f.adminLink && (
              <a href={f.adminLink.href} className="hover:text-foreground transition-colors">
                {f.adminLink.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}