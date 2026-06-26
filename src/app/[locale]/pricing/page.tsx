"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { Accessibility, ArrowRight, Check, DollarSign, Sparkles } from "lucide-react";

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
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
  ctaHref,
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
  const external = ctaHref.startsWith("http");

  const ctaClass = classNames(
    "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-1",
    highlight
      ? "bg-cyan-400 text-black ring-cyan-300/25 hover:brightness-110"
      : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
  );

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

      {external ? (
        <a href={ctaHref} target="_blank" rel="noreferrer" className={ctaClass}>
          {ctaLabel} <ArrowRight className="h-4 w-4" />
        </a>
      ) : (
        <Link href={ctaHref} className={ctaClass}>
          {ctaLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export default function PricingPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.sensus.app";

  const copy = {
    title: isEs ? "Precios" : "Pricing",
    note: isEs
      ? "Empieza gratis, prueba AirTap en apps reales y desbloquea uso completo con Plus."
      : "Start free, try AirTap in real apps, and unlock full usage with Plus.",
    demoName: isEs ? "Demo gratuita" : "Free demo",
    demoDesc: isEs
      ? "Prueba AirTap con gestos reales antes de pagar."
      : "Try AirTap with real gestures before paying.",
    plusName: "AirTap Plus",
    plusDesc: isEs
      ? "Control completo manos libres para uso diario."
      : "Full hands-free control for everyday use.",
    accessName: "Accessibility Program",
    accessDesc: isEs
      ? "Gratis para personas con discapacidad elegibles."
      : "Free for eligible users with disabilities.",
    mostPopular: isEs ? "Más popular" : "Most popular",
    getOnGooglePlay: isEs ? "Obtener en Google Play" : "Get on Google Play",
    learnMore: isEs ? "Ver programa" : "Learn more",
    contact: isEs ? "Contactar" : "Contact",
  };

  const demoBullets = isEs
    ? [
        "10 gestos exitosos de prueba",
        "Funciona con TikTok, Reels, Shorts y Facebook Videos",
        "Prueba swipes, back, likes y pausa/play",
        "Sin tocar la pantalla",
      ]
    : [
        "10 successful trial gestures",
        "Works with TikTok, Reels, Shorts, and Facebook Videos",
        "Try swipes, back, likes, and pause/play",
        "No screen touching required",
      ];

  const plusBullets = isEs
    ? [
        "Gestos ilimitados",
        "Modo cursor",
        "Taps, swipes, back, likes y control multimedia",
        "Ajustes de sensibilidad",
        "Calibración avanzada",
        "Soporte prioritario",
        "3 días de prueba gratis",
      ]
    : [
        "Unlimited gestures",
        "Cursor mode",
        "Taps, swipes, back, likes, and media control",
        "Sensitivity settings",
        "Advanced calibration",
        "Priority support",
        "3-day free trial",
      ];

  const accessibilityBullets = isEs
    ? [
        "AirTap Plus gratis",
        "Sin restricciones de uso",
        "Para personas con discapacidad motora elegibles",
        "Validación mínima y respetuosa",
        "Soporte para configuración",
      ]
    : [
        "Free AirTap Plus",
        "No usage restrictions",
        "For eligible users with motor disabilities",
        "Minimal and respectful verification",
        "Setup support",
      ];

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-10">
      <SectionTitle
        icon={<DollarSign className="h-5 w-5 text-cyan-300" />}
        title={copy.title}
      />

      <p className="mt-3 text-sm text-white/60">{copy.note}</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <PriceCard
          name={copy.demoName}
          price="$0"
          suffix={isEs ? "/ prueba" : "/ trial"}
          desc={copy.demoDesc}
          bullets={demoBullets}
          ctaLabel={copy.getOnGooglePlay}
          ctaHref={playStoreUrl}
        />

        <PriceCard
          name={copy.plusName}
          price="$19.99"
          suffix="/mo"
          desc={copy.plusDesc}
          bullets={plusBullets}
          highlight
          badge={copy.mostPopular}
          ctaLabel={copy.getOnGooglePlay}
          ctaHref={playStoreUrl}
        />

        <PriceCard
          name={copy.accessName}
          price="$0"
          suffix={isEs ? "/ elegibles" : "/ eligible users"}
          desc={copy.accessDesc}
          bullets={accessibilityBullets}
          ctaLabel={copy.learnMore}
          ctaHref={`/${locale}/accessibility-program`}
        />
      </div>

      <div className="mt-10 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
            <Accessibility className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <div className="text-lg font-semibold">
              {isEs ? "Tecnología para quienes más la necesitan" : "Technology for those who need it most"}
            </div>
            <p className="mt-2 text-sm text-white/70">
              {isEs
                ? "Si AirTap puede ayudarte a usar tu teléfono por una condición física o discapacidad, queremos que puedas acceder."
                : "If AirTap can help you use your phone because of a physical condition or disability, we want you to have access."}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href={`/${locale}/accessibility-program`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" />
            Accessibility Program
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
          >
            {copy.contact} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
        >
          {isEs ? "Volver al inicio" : "Back home"}
        </Link>
      </div>
    </main>
  );
}