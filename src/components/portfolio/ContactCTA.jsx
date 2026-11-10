import React, { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { CalendarCheck, Mail, Check } from "lucide-react";
import { toast } from "sonner";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { submitInquiry } from "@/lib/server-fns";
import { portfolio } from "@/portfolio.config";

const projectTypes = portfolio.contact.projectTypes;
const CREATOR_EMAIL = portfolio.creator.email;
const CALENDAR_URL = portfolio.creator.bookingUrl;

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    email: "",
    type: projectTypes[0] || "General Inquiry",
    details: "",
    website: "", // honeypot
  });
  const [done, setDone] = useState(false);
  const submit = useServerFn(submitInquiry);
  const mutation = useMutation({ mutationFn: (data) => submit({ data }) });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.website) return; // bot trapped — silently dropped
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) return;
    mutation.mutate(
      {
        name: form.name.trim(),
        brand: form.brand.trim(),
        email: form.email.trim(),
        project_type: form.type,
        details: form.details.trim(),
        website: form.website,
      },
      {
        onSuccess: () => {
          setDone(true);
          setForm({ name: "", brand: "", email: "", type: projectTypes[0] || "General Inquiry", details: "", website: "" });
        },
        onError: () =>
          toast.error("Something went wrong. Please try again, or email me directly."),
      }
    );
  };

  const fieldBase =
    "w-full bg-transparent border-0 border-b border-background/25 focus:border-background py-3 text-base text-background placeholder:text-background/40 focus:outline-none transition-colors";

  const c = portfolio.contact;

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="rounded-[2.5rem] bg-foreground text-background overflow-hidden relative">
          {/* ambient type */}
          <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-heading italic text-[24vw] leading-none text-background/[0.04] select-none whitespace-nowrap">
              create
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-14 lg:p-20">
            {/* Left — pitch */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-[11px] tracking-[0.34em] uppercase text-background/50 mb-6">
                  {c.eyebrow}
                </p>
                <h2 className="font-heading text-4xl md:text-6xl leading-[1.02] tracking-tight text-balance">
                  <RichText text={c.heading} />
                </h2>
                <p className="mt-7 text-background/70 text-lg leading-relaxed max-w-md">
                  {c.body}
                </p>

                {CREATOR_EMAIL && (
                  <a href={`mailto:${CREATOR_EMAIL}`} className="mt-7 inline-flex items-center gap-2.5 group">
                    <Mail className="w-5 h-5 text-background/60 group-hover:text-background transition-colors" />
                    <span className="font-heading text-2xl md:text-3xl tracking-tight border-b border-background/30 group-hover:border-background transition-colors">
                      {CREATOR_EMAIL}
                    </span>
                  </a>
                )}

                {CALENDAR_URL && (
                  <div className="mt-9">
                    <a
                      href={CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-background text-foreground text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      Book a Call
                    </a>
                  </div>
                )}
              </Reveal>
            </div>

            {/* Right — form / confirmation */}
            <Reveal delay={0.1} className="lg:col-span-6">
              {done ? (
                <div className="h-full flex flex-col justify-center items-start rounded-[2rem] border border-background/15 p-8 md:p-10">
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-background/10 mb-6">
                    <Check className="w-6 h-6" />
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight">
                    Thank you — your inquiry is in.
                  </h3>
                  <p className="mt-3 text-background/70 text-lg leading-relaxed">
                    I'll be in touch soon. For anything urgent, you can always reach
                    me at{" "}
                    <a href={`mailto:${CREATOR_EMAIL}`} className="underline underline-offset-4">
                      {CREATOR_EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-7 text-sm tracking-wide text-background/70 hover:text-background transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* honeypot */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.website}
                    onChange={update("website")}
                    className="absolute opacity-0 -left-[9999px] h-0 w-0 pointer-events-none"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-background/50">Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        className={fieldBase}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-background/50">Brand / Company</label>
                      <input
                        value={form.brand}
                        onChange={update("brand")}
                        placeholder="Brand name"
                        className={fieldBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-background/50">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@brand.com"
                      className={fieldBase}
                    />
                  </div>

                  {projectTypes.length > 0 && (
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-background/50">Project type</label>
                      <select value={form.type} onChange={update("type")} className={`${fieldBase} appearance-none`}>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="text-foreground">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-background/50">Project details</label>
                    <textarea
                      required
                      rows={3}
                      value={form.details}
                      onChange={update("details")}
                      placeholder="What are you building, and what does success look like?"
                      className={`${fieldBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-background text-foreground text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-60"
                  >
                    {mutation.isPending ? "Sending…" : "Send Inquiry"}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}