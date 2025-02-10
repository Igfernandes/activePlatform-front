import type { NextConfig } from "next";
import nextI18next from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n: nextI18next.i18n,
  /* config options here */
};

export default nextConfig;
