/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
   webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
   images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
