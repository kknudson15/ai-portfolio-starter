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

  // Turbopack config (Next.js 16 default bundler)
  turbopack: {
    resolveAlias: {
      // Exclude Node-only packages from the browser/worker bundle
      'onnxruntime-node': '',
      'sharp': '',
    },
  },

  // Webpack fallback (used when explicitly running with --webpack)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
      config.resolve.alias = {
        ...config.resolve.alias,
        'onnxruntime-node$': false,
        'sharp$': false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;