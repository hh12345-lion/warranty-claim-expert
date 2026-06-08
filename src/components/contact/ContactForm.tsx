"use client";

import { useState, type FormEvent } from "react";

const DISPUTE_TYPES = [
  "Breach of Financial Warranty",
  "Completion Accounts",
  "Earn-Out Dispute",
  "Locked Box Leakage",
  "W&I Insurance Claim",
  "Tax Warranty",
  "Business Sale Fraud",
  "Other / Multiple",
];

const STAGES = [
  "Pre-claim assessment",
  "Litigation commenced",
  "Expert determination commenced",
  "Mediation/settlement",
  "Appeal",
];

const DEAL_VALUES = [
  "Under £5M",
  "£5M to £25M",
  "£25M to £100M",
  "Over £100M",
  "Unknown",
];

const CLAIM_VALUES = [
  "Under £500k",
  "£500k to £5M",
  "£5M to £25M",
  "Over £25M",
  "Unknown",
];

const URGENCY_OPTIONS = [
  "Standard (no immediate deadline)",
  "Urgent (hearing within 3 months)",
  "Critical (hearing within 6 weeks)",
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
      fullName: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      lawFirm: String(formData.get("firm") ?? ""),
      disputeType: String(formData.get("dispute_type") ?? ""),
      stage: String(formData.get("stage") ?? ""),
      dealValue: String(formData.get("deal_value") ?? ""),
      claimValue: String(formData.get("claim_value") ?? ""),
      wiInsurance: String(formData.get("wi_insurance") ?? ""),
      urgency: String(formData.get("urgency") ?? ""),
      deadline: String(formData.get("deadline") ?? ""),
      description: String(formData.get("description") ?? ""),
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
    "w-full min-h-[44px] rounded-[var(--radius-sm)] border border-border px-4 py-2.5 text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-heading">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="firm" className="mb-1.5 block text-sm font-medium text-heading">
            Law Firm *
          </label>
          <input
            id="firm"
            name="firm"
            type="text"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-heading">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-heading">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dispute_type" className="mb-1.5 block text-sm font-medium text-heading">
            Dispute Type
          </label>
          <select id="dispute_type" name="dispute_type" className={inputClass}>
            {DISPUTE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stage" className="mb-1.5 block text-sm font-medium text-heading">
            Stage
          </label>
          <select id="stage" name="stage" className={inputClass}>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="deal_value" className="mb-1.5 block text-sm font-medium text-heading">
            Approximate Deal Value
          </label>
          <select id="deal_value" name="deal_value" className={inputClass}>
            {DEAL_VALUES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="claim_value" className="mb-1.5 block text-sm font-medium text-heading">
            Approximate Claim Value
          </label>
          <select id="claim_value" name="claim_value" className={inputClass}>
            {CLAIM_VALUES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wi_insurance" className="mb-1.5 block text-sm font-medium text-heading">
            W&I Insurance Involved?
          </label>
          <select id="wi_insurance" name="wi_insurance" className={inputClass}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="mb-1.5 block text-sm font-medium text-heading">
            Urgency
          </label>
          <select id="urgency" name="urgency" className={inputClass}>
            {URGENCY_OPTIONS.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="deadline" className="mb-1.5 block text-sm font-medium text-heading">
          Deadline / Hearing Date
        </label>
        <input
          id="deadline"
          name="deadline"
          type="text"
          placeholder="e.g. Expert report due 15 July 2025"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-heading">
          Brief Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputClass} min-h-[120px]`}
          placeholder="Describe the dispute, warranties involved, and what expert evidence is needed."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          There was a problem submitting your enquiry. Please email us directly
          at info@warrantyclaimexpert.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[44px] w-full rounded-[var(--radius-sm)] bg-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Instruct an Expert"}
      </button>
    </form>
  );
}
