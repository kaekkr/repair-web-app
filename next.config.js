/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'remont.its.bz',
        port: '',
        pathname: '/storage/**',
      }
    ],
  },
};

module.exports = nextConfig;
