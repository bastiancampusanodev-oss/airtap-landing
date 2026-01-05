import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // ayuda con Turbopack en Next 16 para integraciones como next-intl
  turbopack: {}
};

const withNextIntl = createNextIntlPlugin(); // detecta src/i18n/request.ts automáticamente
export default withNextIntl(nextConfig);
