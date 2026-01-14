"use client";

import {useTranslations, useLocale} from "next-intl";
import Link from "next/link";
import {DollarSign, ArrowRight, Check} from "lucide-react";

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

function Bullet({children}: {children: React.ReactNode}) {
  return (
    <li className="flex gap-2 text-sm text-white/75">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
      <span>{children}</span>
    </li>
  );
}

function PriceCard({
  name,
  price,
  suffix,
  desc,
  highlight,
  badge,
  bullets,
  ctaLabel,
  ctaHref
}: {
  name: string;
  price: string;
  suffix: string;
  desc: string;
  highlight?: boolean;
  badge?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div
      className={classNames(
        "rounded-3xl p-8 ring-1 ring-white/10 bg-white/5",
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

      <div className="mt-4 text-4xl font-semibold tracking-tight">
        {price}
        <span className="text-sm font-medium text-white/60"> {suffix}</span>
      </div>

      <p className="mt-3 text-sm text-white/70">{desc}</p>

      <ul className="mt-5 space-y-2">
        {bullets.map((b) => (
          <Bullet key={b}>{b}</Bullet>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={classNames(
          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-1",
          highlight
            ? "bg-cyan-400 text-black ring-cyan-300/25 hover:brightness-110"
            : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
        )}
      >
        {ctaLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function PricingPage() {
  const t = useTranslations();
  const locale = useLocale();

  // Nota: para ir rápido, dejo los bullets en texto directo.
  // Si después quieres i18n completo, los pasamos a messages/*.json.
  const freeBullets = [
    "Right wink → Like",
    "Left wink → Back",
    "Head turn (yaw) → Swipe",
    "Hold nod → Pause/Play",
    "Head tilt → Volume",
    "Close eyes (2s) → Switch modes",
    "Double nod (Home) → Lock/Unlock",
    "Cursor mode + tap (basic)",
    "Works with TikTok, Reels, browsing"
  ];

  const premiumBullets = [
    "Everything in Free",
    "Landscape support (horizontal mode)",
    "Ultra-precise cursor + extra actions/buttons",
    "Adjust tap timing (dwell/tap delay)",
    "Advanced calibration (stability & smoothing)",
    "Per-app sensitivity presets (coming soon)",
    "Priority support + feature requests"
  ];

  const lifetimeBullets = [
    "Everything in Premium",
    "One-time payment (no subscription)",
    "Lifetime updates",
    "VIP support (priority queue)",
    "Early access to new features/betas"
  ];

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
      <SectionTitle icon={<DollarSign className="h-5 w-5 text-cyan-300" />} title={t("pricing.title")} />
      <p className="mt-3 text-sm text-white/60">{t("pricing.note")}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <PriceCard
          name="Free Forever"
          price="$0"
          suffix="/mo"
          desc="Everything you need to go hands-free."
          bullets={freeBullets}
          ctaLabel="Get Free"
          ctaHref={`/${locale}/`}
        />

        <PriceCard
          name="Premium"
          price="$14.99"
          suffix="/mo"
          desc="Precision, customization, and priority support."
          bullets={premiumBullets}
          highlight
          badge="Most popular"
          ctaLabel="Go Premium"
          ctaHref={`/${locale}/contact`}
        />

        <PriceCard
          name="Lifetime"
          price="$499"
          suffix="one-time"
          desc="Pay once. Keep Premium forever."
          bullets={lifetimeBullets}
          ctaLabel="Get Lifetime"
          ctaHref={`/${locale}/contact`}
        />
      </div>

      {/* Organizations / Enterprise */}
      <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="text-lg font-semibold">For organizations</div>
        <p className="mt-2 text-sm text-white/70">
          Provide AirTap Premium to teams, schools, clinics, or accessibility programs with volume pricing.
        </p>

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="text-sm text-white/75">• Volume licensing (10 / 100 / 1000+ seats)</li>
          <li className="text-sm text-white/75">• Centralized onboarding docs</li>
          <li className="text-sm text-white/75">• Priority support & invoicing</li>
          <li className="text-sm text-white/75">• Custom rollout assistance (optional)</li>
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
          >
            Contact sales <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href={`/${locale}/affiliates`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
          >
            {t("pricing.cta")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8">
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
