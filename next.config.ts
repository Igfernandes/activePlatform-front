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
    ],
  },
};

export default nextConfig;
