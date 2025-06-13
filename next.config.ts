import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "api.agmturismomarica.com.br/**",
      }
    ],
  },
};

export default nextConfig;
