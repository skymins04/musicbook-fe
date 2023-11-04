/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  swcMinify: true,
  output: "standalone",
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'proxy.musicbook.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'proxy.musicbook.kr',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  env: {
    RELEASE_ENV: process.env.RELEASE_ENV,
    DOMAIN: process.env.DOMAIN,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
};

module.exports = nextConfig;
