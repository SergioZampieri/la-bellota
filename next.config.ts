import type { NextConfig } from "next";

// Static export: the site is plain HTML/CSS/JS in out/, hostable anywhere.
// Under a sub-path (GitHub Pages serves /<repo>/) set NEXT_PUBLIC_BASE_PATH
// at build time; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
