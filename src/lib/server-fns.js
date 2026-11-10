import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { secrets } from "base44:runtime";
import { requireUser } from "@/lib/auth-middleware";

export const getServerInfo = createServerFn({ method: "GET" }).handler(async () => ({
  renderedAt: new Date().toISOString(),
}));

const InquiryInput = z.object({
  name: z.string().min(1).max(120),
  brand: z.string().max(160).optional().default(""),
  email: z.string().email().max(160),
  project_type: z.string().max(80),
  details: z.string().min(1).max(3000),
  // Honeypot: a human never fills this hidden field.
  website: z.string().max(0).optional().default(""),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .validator(InquiryInput)
  .handler(async ({ data, context }) => {
    if (data.website && data.website.length > 0) {
      return { ok: true, saved: false };
    }
    const base44 = context.getBase44();
    const record = await base44.entities.Inquiries.create({
      name: data.name,
      brand: data.brand,
      email: data.email,
      project_type: data.project_type,
      details: data.details,
      status: "New",
    });

    // Best-effort notification to a creator-configured email (secret).
    try {
      const notifyEmail = await secrets.get("INQUIRY_NOTIFY_EMAIL");
      if (notifyEmail) {
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: notifyEmail,
          subject: `New inquiry from ${data.name}`,
          text: [
            "New inquiry received via your portfolio.",
            "",
            `Name: ${data.name}`,
            `Brand/Company: ${data.brand || "—"}`,
            `Email: ${data.email}`,
            `Project type: ${data.project_type}`,
            "",
            "Details:",
            data.details,
          ].join("\n"),
        });
      }
    } catch {
      // Email is best-effort; the inquiry is already saved.
    }

    return { ok: true, saved: true, id: record.id };
  });

export const listInquiries = createServerFn({ method: "GET" })
  .middleware([requireUser])
  .handler(async ({ context }) => {
    if (context.user?.role !== "admin") {
      throw Object.assign(new Error("Forbidden"), { status: 403 });
    }
    return context.getBase44().entities.Inquiries.list("-created_date", 200);
  });

export const updateInquiryStatus = createServerFn({ method: "POST" })
  .middleware([requireUser])
  .validator(z.object({ id: z.string(), status: z.string() }))
  .handler(async ({ data, context }) => {
    if (context.user?.role !== "admin") {
      throw Object.assign(new Error("Forbidden"), { status: 403 });
    }
    return context.getBase44().entities.Inquiries.update(data.id, { status: data.status });
  });