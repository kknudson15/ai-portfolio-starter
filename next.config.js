/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable image optimization
    unoptimized: true,
    // Allow local images
    remotePatterns: [],
    // Supported formats
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
};

module.exports = nextConfig;