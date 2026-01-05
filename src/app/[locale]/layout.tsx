import SiteHeader from "@/components/SiteHeader";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  // CLAVE: esto hace que next-intl use /en o /es correctamente
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/40 glow" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-cyan-300/25 glow" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/25 glow" />

        <SiteHeader />

        <main className="relative mx-auto max-w-6xl px-6 pb-20">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
