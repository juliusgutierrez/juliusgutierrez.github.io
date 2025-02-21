import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true, // Uses SWC for faster minification
  output: "export", // Enables static export for GitHub Pages or Netlify
};

export default nextConfig;
