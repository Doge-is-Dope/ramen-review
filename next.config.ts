import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ramen-portfolio",
  images: { unoptimized: true },
  async redirects() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/",
        destination: "/ramen-portfolio",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
