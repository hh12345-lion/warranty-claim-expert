"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_EMAIL } from "@/lib/site";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

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
      message: String(formData.get("message") ?? "").trim(),
      formType: "contact",
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
      };

      if (res.ok && (result.ok || result.success || res.status === 200)) {
        try {
          await submitNetlifyForm("contact", {
            name: payload.fullName,
            email: payload.email,
            phone: payload.phone,
            message: payload.message,
          });
        } catch {
          // Sheets/webhook already stored the enquiry; don't block the visitor.
        }
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
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="max-w-lg space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
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
        <label htmlFor="message" className={labelClass}>
          How can we help?{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Brief description of the warranty claim or enquiry."
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
