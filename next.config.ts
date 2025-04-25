import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Add a rule to handle .mjs files
    config.module.rules.push({
      test: /\.mjs$/,
      type: 'javascript/auto',
    });
    return config;
  },
};

export default nextConfig;
