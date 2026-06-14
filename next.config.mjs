/** @type {import('next').NextConfig} */

// Repo name — the site is served from https://<user>.github.io/<repo>/ on GitHub Pages.
const repo = "retire-right";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  // Pages serves the project from a sub-path; only apply it in production builds
  // so local `next dev` keeps working at the root.
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Static export can't use the on-demand image optimizer.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
