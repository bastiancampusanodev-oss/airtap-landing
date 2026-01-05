import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import "../globals.css";

export const metadata: Metadata = {
  title: "AirTap — Hands-free control",
  description: "Control your phone hands-free with face gestures."
};

export function generateStaticParams() {
  return [{locale: "en"}, {locale: "es"}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  // ✅ Esto evita que next-intl quede con locale undefined
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-black text-white">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
