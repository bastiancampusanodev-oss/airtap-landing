"use client";

import Image from "next/image";
import Link from "next/link";
import {useMemo} from "react";
import {useLocale, useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {ArrowRight, Sparkles, Globe, Video, DollarSign, Users} from "lucide-react";


function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Page() {
  const t = useTranslations();
  const locale = useLocale();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="pt-10 md:pt-14">
      {/* Header global */}

      {/* HERO */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.1}}
            className="mt-5 max-w-2xl text-base md:text-lg text-white/75"
          >
            {t("hero.subtitle")}
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* Join beta -> página Affiliates */}
            <Link
              href={`/${locale}/affiliates`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-110"
            >
              {t("hero.ctaPrimary")} <ArrowRight className="h-4 w-4" />
            </Link>

            {/* Watch demo -> sección del home */}
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/8"
            >
              <Video className="h-4 w-4" /> {t("hero.ctaSecondary")}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
            <FeaturePill icon={<Globe className="h-4 w-4" />} text={t("bullets.b1")} />
            <FeaturePill icon={<Sparkles className="h-4 w-4" />} text={t("bullets.b2")} />
            <FeaturePill icon={<Users className="h-4 w-4" />} text={t("bullets.b3")} />
          </div>

          {/* Quick links -> PÁGINAS (no #sections) */}
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <Link
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10 hover:bg-white/10"
            >
              <DollarSign className="h-4 w-4 text-cyan-300" /> {t("nav.pricing")}
            </Link>

            <Link
              href={`/${locale}/affiliates`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10 hover:bg-white/10"
            >
              <Users className="h-4 w-4 text-cyan-300" /> {t("nav.affiliates")}
            </Link>
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden bg-white/5 ring-1 ring-white/10">
            <Image
              src="/brand/feature.png"
              alt="AirTap feature graphic"
              width={1024}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="p-5 border-t border-white/10 bg-black/30">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/brand/logo.png"
                    alt="AirTap"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold leading-tight">AirTap</div>
                  <div className="text-xs text-white/60">Face gestures • Cursor • Accessibility-first</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW (Home section) */}
      <section id="how" className="mt-16 md:mt-24">
        <SectionTitle icon={<Sparkles className="h-5 w-5 text-cyan-300" />} title={t("how.title")} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title={t("how.s1t")} desc={t("how.s1d")} />
          <Card title={t("how.s2t")} desc={t("how.s2d")} />
          <Card title={t("how.s3t")} desc={t("how.s3d")} />
        </div>
      </section>

      {/* DEMO (Home section) */}
{/* DEMO (Home section) */}
<section id="demo" className="mt-16 md:mt-24">
  <SectionTitle icon={<Video className="h-5 w-5 text-cyan-300" />} title={t("demo.title")} />
  <p className="mt-3 text-sm text-white/60">{t("demo.hint")}</p>

  <div className="mt-6 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5">
    <div className="p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/40 ring-1 ring-white/10">
    <video
  className="w-full h-full object-contain"
  src="/airtap_demo_pip.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  controls
/>

      </div>
    </div>
  </div>
</section>


      <footer className="mt-20 border-t border-white/10 pt-8 text-sm text-white/60">
        {t("footer.rights", {year})}
      </footer>
    </div>
  );
}

function FeaturePill({icon, text}: {icon: React.ReactNode; text: string}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
      <span className="text-cyan-300">{icon}</span>
      <span className="text-sm text-white/80">{text}</span>
    </div>
  );
}

function SectionTitle({icon, title}: {icon: React.ReactNode; title: string}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/25 flex items-center justify-center">
        {icon}
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({title, desc}: {title: string; desc: string}) {
  return (
    <div className={classNames("rounded-3xl bg-white/5 p-6 ring-1 ring-white/10")}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
