/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/web" : "",
  assetPrefix: isGitHubPages ? "/web/" : "",
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
