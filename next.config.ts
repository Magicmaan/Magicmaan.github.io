import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Ensure trailing slashes for static export
  /* config options here */
};

export default nextConfig;
