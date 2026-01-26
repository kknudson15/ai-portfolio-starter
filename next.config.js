/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable image optimization
    unoptimized: false,
    // Allow local images
    remotePatterns: [],
    // Supported formats
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Optimize for production
  swcMinify: true,
};

module.exports = nextConfig;