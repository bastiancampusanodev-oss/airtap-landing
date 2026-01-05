"use client";

import Link from "next/link";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

function stripLocale(pathname: string) {
  // /en/pricing -> /pricing
  return pathname.replace(/^\/(en|es)(?=\/|$)/, "") || "/";
}

export default function SiteHeader() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const rest = stripLocale(pathname);

  const to = (p: string) => `/${locale}${p}`;

  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-7">
      <nav className="flex items-center justify-between">
        <Link href={to("/")} className="flex items-center gap-3">
          <Image
            src="/brand/logo.png"
            alt="AirTap"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="font-semibold tracking-tight">AirTap</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href={to("/#how")} className="hover:text-white">{t("nav.how")}</Link>
          <Link href={to("/pricing")} className="hover:text-white">{t("nav.pricing")}</Link>
          <Link href={to("/affiliates")} className="hover:text-white">{t("nav.affiliates")}</Link>
          <Link href={to("/contact")} className="hover:text-white">{t("nav.contact")}</Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Locale switcher que mantiene la ruta actual */}
          <div className="flex items-center gap-1 rounded-xl bg-white/5 ring-1 ring-white/10 p-1 text-xs">
            <Link className="px-2 py-1 rounded-lg hover:bg-white/10" href={`/en${rest}`}>EN</Link>
            <Link className="px-2 py-1 rounded-lg hover:bg-white/10" href={`/es${rest}`}>ES</Link>
          </div>

          <Link
            href={to("/affiliates")}
            className="rounded-xl bg-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-100 ring-1 ring-cyan-300/30 hover:bg-cyan-400/25"
          >
            {t("hero.ctaPrimary")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
