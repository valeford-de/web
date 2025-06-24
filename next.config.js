/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 14
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Fix asset paths for GitHub Pages deployment with custom domain
  basePath: '',
  assetPrefix: '',
  // Optimize for static export
  swcMinify: true,
  // Ensure proper CSS handling for static export
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig