import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ramen-review",
  images: { unoptimized: true },
};

export default nextConfig;
