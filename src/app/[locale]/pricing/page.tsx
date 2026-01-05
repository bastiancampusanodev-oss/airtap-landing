"use client";

import {useTranslations, useLocale} from "next-intl";
import Link from "next/link";
import {DollarSign, ArrowRight} from "lucide-react";

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

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

function PriceCard({
  name,
  price,
  suffix,
  desc,
  highlight,
  badge
}: {
  name: string;
  price: string;
  suffix: string;
  desc: string;
  highlight?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-3xl p-6 ring-1 ring-white/10 bg-white/5",
        highlight && "ring-cyan-300/40 bg-cyan-400/10"
      )}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{name}</h2>
        {badge && (
          <span className="text-xs font-semibold text-cyan-200 bg-cyan-400/20 px-2 py-1 rounded-full ring-1 ring-cyan-300/25">
            {badge}
          </span>
        )}
      </div>

      <div className="mt-4 text-3xl font-semibold">
        {price}
        <span className="text-sm font-medium text-white/60"> {suffix}</span>
      </div>

      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  );
}

export default function PricingPage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
      <SectionTitle icon={<DollarSign className="h-5 w-5 text-cyan-300" />} title={t("pricing.title")} />
      <p className="mt-3 text-sm text-white/60">{t("pricing.note")}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <PriceCard
          name={t("pricing.free")}
          price="$0"
          suffix={t("pricing.perMonth")}
          desc={t("pricing.freeDesc")}
        />
        <PriceCard
          name={t("pricing.pro")}
          price="$9.99"
          suffix={t("pricing.perMonth")}
          desc={t("pricing.proDesc")}
          highlight
          badge={t("pricing.popular")}
        />
        <PriceCard
          name={t("pricing.annual")}
          price="$99.99"
          suffix={t("pricing.perYear")}
          desc={t("pricing.annualDesc")}
        />
      </div>

      <div className="mt-8 flex gap-3">
        <Link
          href={`/${locale}/affiliates`}
          className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
        >
          {t("pricing.cta")} <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
        >
          {t("pricing.backHome")}
        </Link>
      </div>
    </main>
  );
}
