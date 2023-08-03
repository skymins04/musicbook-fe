/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  output: "standalone",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    RELEASE_ENV: process.env.RELEASE_ENV,
    DOMAIN: process.env.DOMAIN,
  },
};

module.exports = nextConfig;
