"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function SiteHeader() {
  const t = useTranslations();
  const locale = useLocale();

  const to = (p: string) => `/${locale}${p}`;

  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-7">
      <nav className="flex items-center justify-between gap-6">
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
          <Link href={to("/#how")} className="hover:text-white">
            {t("nav.how")}
          </Link>

          <Link href={to("/pricing")} className="hover:text-white">
            {t("nav.pricing")}
          </Link>

          <Link href={to("/accessibility-program")} className="hover:text-white">
            Accessibility Program
          </Link>

          <Link href={to("/affiliates")} className="hover:text-white">
            {t("nav.affiliates")}
          </Link>

          <Link href={to("/contact")} className="hover:text-white">
            {t("nav.contact")}
          </Link>
        </div>
      </nav>
    </header>
  );
}