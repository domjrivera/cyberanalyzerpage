import type { NextConfig } from "next";

/**
 * GitHub Pages: set GITHUB_PAGES=true in CI. For project sites (not username.github.io),
 * set NEXT_PUBLIC_BASE_PATH to /your-repo-name (must match the repo name).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;