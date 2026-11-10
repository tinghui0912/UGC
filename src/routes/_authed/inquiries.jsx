import React from "react";
import { createFileRoute, useRouter, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { listInquiries, updateInquiryStatus } from "@/lib/server-fns";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/_authed/inquiries")({
  ssr: false,
  loader: async () => {
    const items = await listInquiries();
    return items;
  },
  head: () => ({ meta: [{ title: "Inquiries — Mara Vesper" }] }),
  component: InquiriesPage,
});

const statuses = ["New", "Read", "Replied", "Archived"];

const statusStyles = {
  New: "bg-accent/15 text-accent border-accent/30",
  Read: "bg-secondary text-foreground/70 border-border",
  Replied: "bg-foreground/10 text-foreground border-foreground/20",
  Archived: "bg-secondary text-muted-foreground border-border",
};

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "UTC",
    });
  } catch {
    return iso;
  }
}

function InquiriesPage() {
  const inquiries = Route.useLoaderData();
  const user = Route.useRouteContext().user;
  const router = useRouter();
  const update = useServerFn(updateInquiryStatus);
  const mutation = useMutation({ mutationFn: (data) => update({ data }) });

  const onStatusChange = (id, status) => {
    mutation.mutate({ id, status }, { onSuccess: () => router.invalidate() });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.34em] uppercase text-muted-foreground mb-3">
              Creator Admin
            </p>
            <h1 className="font-heading text-4xl md:text-5xl tracking-tight">Inquiries</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Signed in as {user?.email} · {inquiries.length} total
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </a>
        </div>

        {inquiries.length === 0 ? (
          <div className="rounded-[2rem] border border-border bg-card/50 p-12 text-center">
            <p className="font-heading text-2xl">No inquiries yet</p>
            <p className="mt-2 text-muted-foreground">
              New portfolio submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {inquiries.map((inq) => (
              <article
                key={inq.id}
                className="rounded-[1.5rem] border border-border bg-card/50 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="font-heading text-2xl tracking-tight">{inq.name}</h2>
                      <span
                        className={`px-2.5 py-1 rounded-full border text-[10px] tracking-[0.18em] uppercase ${
                          statusStyles[inq.status] || statusStyles.New
                        }`}
                      >
                        {inq.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {inq.brand ? `${inq.brand} · ` : ""}
                      <a href={`mailto:${inq.email}`} className="hover:text-foreground transition-colors">
                        {inq.email}
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Status
                    </label>
                    <select
                      value={inq.status}
                      onChange={(e) => onStatusChange(inq.id, e.target.value)}
                      disabled={mutation.isPending}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:border-foreground"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Project type
                    </span>
                    <p className="mt-1 text-foreground/80">{inq.project_type}</p>
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Received
                    </span>
                    <p className="mt-1 text-foreground/80">{formatDate(inq.created_date)}</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-border">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    Details
                  </span>
                  <p className="mt-2 text-foreground/85 leading-relaxed whitespace-pre-wrap">
                    {inq.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}