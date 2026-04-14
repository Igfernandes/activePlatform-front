import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "agm.companymarket.com.br/**",
      },
      {
        hostname: "192.168.1.2",
      },
      {
        hostname: "api.agmturismomarica.com.br"
      }
    ],
  },
};

export default nextConfig;
