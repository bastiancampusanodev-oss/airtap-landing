"use client";

import {useTranslations} from "next-intl";
import {Users, ArrowRight} from "lucide-react";

const CONTACT_EMAIL = "bastiancampusanodev@gmail.com";

function SectionTitle({icon, title}: {icon: React.ReactNode; title: string}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
  type = "text"
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs text-white/70">{label}</span>
      <input
        className="mt-2 w-full rounded-2xl bg-black/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-cyan-300/40"
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}

export default function AffiliatesPage() {
  const t = useTranslations();

  const affiliateMailto = (name: string, email: string, handle: string, audience: string) => {
    const subject = encodeURIComponent("AirTap — Affiliate program request");
    const body = encodeURIComponent(
      `Hi AirTap,\n\nI'd like to join the affiliate program.\n\nName: ${name}\nEmail: ${email}\nHandle/Link: ${handle}\nAudience: ${audience}\n\nThanks!`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
      <SectionTitle icon={<Users className="h-5 w-5 text-cyan-300" />} title={t("aff.title")} />
      <p className="mt-3 text-sm text-white/70 max-w-2xl">{t("aff.subtitle")}</p>

      <form
        className="mt-8 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 max-w-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          const name = String(data.get("name") || "");
          const email = String(data.get("email") || "");
          const handle = String(data.get("handle") || "");
          const audience = String(data.get("audience") || "");
          window.location.href = affiliateMailto(name, email, handle, audience);
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field name="name" label={t("aff.name")} placeholder="Jane Doe" required />
          <Field name="email" label={t("aff.email")} placeholder="jane@email.com" required type="email" />
          <div className="md:col-span-2">
            <Field name="handle" label={t("aff.handle")} placeholder="@username or https://..." required />
          </div>
          <div className="md:col-span-2">
            <Field name="audience" label={t("aff.audience")} placeholder="e.g., 50k TikTok" />
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
        >
          {t("aff.send")} <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-3 text-xs text-white/50">
          {t("aff.note")}
        </p>
      </form>
    </main>
  );
}
