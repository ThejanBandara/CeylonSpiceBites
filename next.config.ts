import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.theflavorbender.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.srilankan-recipes.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
