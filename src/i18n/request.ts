import {getRequestConfig} from "next-intl/server";

const SUPPORTED = ["en", "es"] as const;
type SupportedLocale = (typeof SUPPORTED)[number];

export default getRequestConfig(async ({locale}) => {
  const safeLocale: SupportedLocale =
    (SUPPORTED as readonly string[]).includes(locale) ? (locale as SupportedLocale) : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default
  };
});
