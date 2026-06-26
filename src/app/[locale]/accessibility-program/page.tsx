"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Accessibility,
  ArrowRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-white/75">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
      <span>{children}</span>
    </li>
  );
}

export default function AccessibilityProgramPage() {
  const locale = useLocale();

  const isEs = locale === "es";

  const copy = {
    title: isEs ? "Accessibility Program" : "Accessibility Program",
    subtitle: isEs
      ? "Si tienes una discapacidad que dificulta usar tu teléfono con las manos, puedes usar AirTap gratis y sin restricciones."
      : "If you have a disability that makes it difficult to use your phone with your hands, you can use AirTap for free with no restrictions.",
    missionTitle: isEs ? "Nuestra misión" : "Our mission",
    missionText: isEs
      ? "AirTap existe para entregar tecnología útil a quienes realmente la necesitan. Creemos que el control manos libres no debe ser un lujo para personas con discapacidad."
      : "AirTap exists to deliver useful technology to the people who truly need it. We believe hands-free phone control should not be a luxury for people with disabilities.",
    whoTitle: isEs ? "¿Para quién es?" : "Who is it for?",
    whoBullets: isEs
      ? [
          "Personas con discapacidad en extremidades superiores.",
          "Personas con movilidad reducida en brazos, manos o dedos.",
          "Personas con paraplejia, cuadriplejia u otras condiciones motoras.",
          "Personas que dependen de accesibilidad para usar su teléfono día a día.",
        ]
      : [
          "People with upper-limb disabilities.",
          "People with reduced mobility in arms, hands, or fingers.",
          "People with paraplegia, quadriplegia, or other motor conditions.",
          "People who depend on accessibility tools to use their phone every day.",
        ],
    includedTitle: isEs ? "Qué incluye" : "What is included",
    includedBullets: isEs
      ? [
          "Acceso completo a AirTap Plus.",
          "Uso sin restricciones de gestos faciales.",
          "Modo cursor, navegación, taps, swipes, back, likes y control multimedia.",
          "Soporte prioritario para configuración y onboarding.",
        ]
      : [
          "Full access to AirTap Plus.",
          "Unlimited use of face gestures.",
          "Cursor mode, navigation, taps, swipes, back, likes, and media control.",
          "Priority support for setup and onboarding.",
        ],
    privacyTitle: isEs ? "Privacidad y validación" : "Privacy and verification",
    privacyText: isEs
      ? "El programa usará una validación mínima y respetuosa. Pediremos solo la información necesaria para confirmar elegibilidad y evitar abuso del beneficio."
      : "The program will use minimal and respectful verification. We will ask only for the information needed to confirm eligibility and prevent abuse of the benefit.",
    cta: isEs ? "Solicitar acceso gratuito" : "Request free access",
    contact: isEs ? "Contactar a AirTap" : "Contact AirTap",
  };

  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-12">
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
              <Accessibility className="h-7 w-7 text-cyan-300" />
            </div>
            <p className="text-sm font-semibold text-cyan-200">
              AirTap Accessibility
            </p>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.98]">
            {copy.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-8">
            {copy.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
            >
              {copy.cta} <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
            >
              {isEs ? "Ver precios" : "View pricing"}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
              <HeartHandshake className="h-6 w-6 text-cyan-300" />
            </div>
            <h2 className="text-2xl font-semibold">{copy.missionTitle}</h2>
          </div>

          <p className="mt-5 text-white/70 leading-7">{copy.missionText}</p>

          <div className="mt-6 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
            <p className="text-sm text-white/75">
              {isEs
                ? "Gratis para personas elegibles. Sin restricciones. Sin límite artificial de funciones."
                : "Free for eligible users. No restrictions. No artificial feature limits."}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
          <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
            <Accessibility className="h-6 w-6 text-cyan-300" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">{copy.whoTitle}</h2>
          <ul className="mt-5 space-y-3">
            {copy.whoBullets.map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
          <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-cyan-300" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">{copy.includedTitle}</h2>
          <ul className="mt-5 space-y-3">
            {copy.includedBullets.map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
          <div className="h-11 w-11 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-cyan-300" />
          </div>
          <h2 className="mt-5 text-xl font-semibold">{copy.privacyTitle}</h2>
          <p className="mt-5 text-sm text-white/70 leading-7">
            {copy.privacyText}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10"
          >
            {copy.contact} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}