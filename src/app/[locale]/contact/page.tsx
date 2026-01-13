"use client";

import {useTranslations} from "next-intl";
import {Mail, MessageCircle} from "lucide-react";

const WHATSAPP_NUMBER_E164 = "56965351547";
const CONTACT_EMAIL = "admin@airtapapp.com";

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

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
      <SectionTitle icon={<Mail className="h-5 w-5 text-cyan-300" />} title={t("contact.title")} />
      <p className="mt-3 text-sm text-white/70 max-w-2xl">{t("contact.subtitle")}</p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10"
          href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent("Hi! I'm interested in AirTap.")}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4 text-cyan-300" /> {t("contact.whatsapp")}
        </a>

        <a
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AirTap — Contact")}`}
        >
          <Mail className="h-4 w-4" /> {t("contact.email")}
        </a>
      </div>
    </main>
  );
}
