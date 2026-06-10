"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

interface EnquiryFormProps {
  serviceOptions: string[];
  formspreeId: string;
  variant?: "bordered" | "underline";
  className?: string;
}

const inputBordered =
  "w-full rounded-sm border border-white/10 bg-surface-darker px-3.5 py-2.5 " +
  "font-sans text-[13px] text-white placeholder:text-muted/50 " +
  "outline-none transition-[border-color,box-shadow] duration-200 " +
  "focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(37,89,244,0.15)]";

const inputUnderline =
  "w-full border-0 border-b border-white/15 bg-transparent px-0 py-2.5 " +
  "font-sans text-[13px] text-white placeholder:text-muted/40 " +
  "outline-none transition-[border-color] duration-200 " +
  "focus:border-primary/60";

type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm({
  serviceOptions,
  formspreeId,
  variant = "bordered",
  className,
}: EnquiryFormProps) {
  const isUnderline = variant === "underline";
  const inputBase = isUnderline ? inputUnderline : inputBordered;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.errors?.[0]?.message ?? "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-sm border border-white/[0.06] bg-surface-dark p-10 text-center",
          className
        )}
      >
        {/* Checkmark circle */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path d="M5 13.5l5.5 5.5 10.5-11" stroke="#2559f4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="font-sans text-base font-bold text-white">Request Received</p>
          <p className="mt-1 font-sans text-sm text-muted">
            Thank you. Our team will respond within 24 business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        isUnderline
          ? "p-0"
          : "rounded-sm border border-white/[0.06] bg-surface-dark p-6 sm:p-8",
        className
      )}
    >
      {/* Header — hidden in underline variant */}
      <div className={cn("mb-6 flex items-center gap-3", isUnderline && "hidden")}>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-primary/20">
          <span
            className="material-symbols-outlined text-[18px] text-primary"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
            aria-hidden="true"
          >
            description
          </span>
        </div>
        <div>
          <h2 className="font-sans text-base font-bold text-white">Enterprise Inquiry</h2>
          <p className="font-sans text-[12px] text-muted">
            Fields marked with <span className="text-primary">*</span> are mandatory.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className={inputBase}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Corporate Email <span className="text-primary">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="name@company.com"
              className={inputBase}
            />
          </div>
        </div>

        {/* Row 2: Company + Service */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Company Name <span className="text-primary">*</span>
            </label>
            <input
              name="company"
              type="text"
              required
              placeholder="Global Corp Ltd."
              className={inputBase}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Service Interest <span className="text-primary">*</span>
            </label>
            <div className="relative">
              <select
                name="service"
                required
                defaultValue=""
                className={cn(
                  inputBase,
                  "appearance-none pr-9 cursor-pointer",
                  // Firefox: remove default arrow
                  "[&::-ms-expand]:hidden"
                )}
              >
                <option value="" disabled>
                  Select a Division
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-surface-darker text-white">
                    {opt}
                  </option>
                ))}
              </select>
              {/* Custom chevron */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Project details (full-width) */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            Project Details
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Briefly describe your requirements..."
            className={cn(inputBase, "resize-none")}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <p className="font-sans text-[12px] text-red-400">{errorMsg}</p>
        )}

        {/* Footer: privacy note + submit */}
        <div className="flex flex-col items-start justify-between gap-3 pt-1 sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5 font-sans text-[11px] text-muted/60">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20" }}
              aria-hidden="true"
            >
              lock
            </span>
            Your data is secured under our Corporate Privacy Policy.
          </p>

          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-sm px-5 py-2.5",
              "font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white",
              "bg-primary transition-colors duration-200 hover:bg-primary-glow",
              "shadow-[0_0_20px_rgba(37,89,244,0.35)] hover:shadow-[0_0_28px_rgba(77,123,255,0.5)]",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {status === "loading" ? (
              <>
                <Spinner />
                Submitting…
              </>
            ) : (
              <>
                Submit Request
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.25" />
      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
