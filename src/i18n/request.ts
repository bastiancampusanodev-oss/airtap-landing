import {getRequestConfig} from "next-intl/server";

export const SUPPORTED = ["en", "es"] as const;
export type SupportedLocale = (typeof SUPPORTED)[number];

export default getRequestConfig(async ({locale}) => {
  const loc = locale ?? "en";

  const safeLocale: SupportedLocale =
    (SUPPORTED as readonly string[]).includes(loc) ? (loc as SupportedLocale) : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../../messages/${safeLocale}.json`)).default
  };
});
