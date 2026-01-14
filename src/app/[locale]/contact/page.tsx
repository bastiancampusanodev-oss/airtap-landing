"use client";

import React, { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm text-white/75">{label}</span>
      <input
        className="mt-2 w-full rounded-2xl bg-black/40 px-4 py-3 text-base text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-300/40"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        autoComplete={autoComplete}
      />
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const t = useTranslations();
  const [status, setStatus] = useState<Status>("idle");

  // ✅ Pon tu WhatsApp acá (sin +, solo dígitos). Ej: "56965351547"
  const WHATSAPP_NUMBER = "";

  const whatsappHref = useMemo(() => {
    if (!WHATSAPP_NUMBER) return "";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      t("contact.whatsappPrefill")
    )}`;
  }, [WHATSAPP_NUMBER, t]);

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-12">
      <SectionTitle
        icon={<Mail className="h-6 w-6 text-cyan-300" />}
        title={t("contact.title")}
      />

      <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl">
        {t("contact.subtitleLong")}
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form card */}
        <form
          className="rounded-3xl bg-white/5 p-7 md:p-8 ring-1 ring-white/10"
          onSubmit={async (e) => {
            e.preventDefault();
            if (status === "sending") return;

            setStatus("sending");

            const form = e.currentTarget;
            const data = new FormData(form);

            const name = String(data.get("name") || "").trim();
            const email = String(data.get("email") || "").trim();
            const topic = String(data.get("topic") || "").trim();
            const message = String(data.get("message") || "").trim();

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, topic, message }),
              });

              if (!res.ok) throw new Error("Request failed");

              setStatus("sent");
              form.reset();
            } catch {
              setStatus("error");
            }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field
              name="name"
              label={t("contact.name")}
              placeholder="Jane Doe"
              required
              autoComplete="name"
            />
            <Field
              name="email"
              label={t("contact.email")}
              placeholder="jane@email.com"
              required
              type="email"
              autoComplete="email"
            />

            <div className="md:col-span-2">
              <Field
                name="topic"
                label={t("contact.topic")}
                placeholder={t("contact.topicPlaceholder")}
                autoComplete="off"
              />
            </div>

            <label className="md:col-span-2 block">
              <span className="text-sm text-white/75">{t("contact.message")}</span>
              <textarea
                className="mt-2 w-full min-h-[140px] rounded-2xl bg-black/40 px-4 py-3 text-base text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-300/40"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                required
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? t("contact.sending")
              : status === "sent"
              ? t("contact.sent")
              : t("contact.send")}
            <ArrowRight className="h-4 w-4" />
          </button>

          {status === "sent" && (
            <p className="mt-4 text-sm text-cyan-200">{t("contact.success")}</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-300">{t("contact.error")}</p>
          )}

          <p className="mt-3 text-xs text-white/50">{t("contact.note")}</p>
        </form>

        {/* Quick actions card */}
        <div className="rounded-3xl bg-white/5 p-7 md:p-8 ring-1 ring-white/10">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-cyan-300" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold">{t("contact.quickTitle")}</h2>
          </div>

          <p className="mt-3 text-white/70">{t("contact.quickDesc")}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {!!WHATSAPP_NUMBER && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
              >
                {t("contact.whatsapp")} <ArrowRight className="h-4 w-4" />
              </a>
            )}

            <a
              href="mailto:admin@airtapapp.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              {t("contact.email")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
            <p className="text-sm text-white/70">
              <span className="text-white/85 font-semibold">admin@airtapapp.com</span>
              <br />
              {t("contact.emailHint")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
