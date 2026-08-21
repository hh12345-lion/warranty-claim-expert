"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_EMAIL } from "@/lib/site";

const DISPUTE_TYPES = [
  "",
  "Breach of financial warranty",
  "Completion accounts",
  "Earn-out dispute",
  "Locked box leakage",
  "W&I insurance claim",
  "Tax warranty",
  "Business sale fraud",
  "Other / multiple",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      lawFirm: String(formData.get("firm") ?? "").trim(),
      disputeType: String(formData.get("dispute_type") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full min-h-[44px] border border-border bg-white px-4 py-2.5 text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  const labelClass = "mb-1.5 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="firm" className={labelClass}>
          Firm or organisation <span className="text-accent">*</span>
        </label>
        <input
          id="firm"
          name="firm"
          type="text"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Telephone{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. 020 7123 4567"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="dispute_type" className={labelClass}>
          Dispute type
        </label>
        <select id="dispute_type" name="dispute_type" className={inputClass}>
          {DISPUTE_TYPES.map((t) => (
            <option key={t || "default"} value={t}>
              {t || "Select if known"}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Brief enquiry <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="Describe the dispute, warranties involved, and the expert evidence required."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          We could not send your enquiry. Please email us at {COMPANY_EMAIL} or
          try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
