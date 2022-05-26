/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      loader: "file-loader"
    });

    config.module.rules.push({
      test: /\.svg$/i,
      loader: "@svgr/webpack"
    });

    return config;
  },
  // Required for using with `next/image` component
  images: {
    domains: ["localhost", "firebasestorage.googleapis.com"]
  },
  // Disable `x-powered-by` header
  poweredByHeader: false,
  // Enable React strict mode in development
  reactStrictMode: true,
  // Dev env only option
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 30 * 1000,
    pagesBufferLength: 2
  }
};

module.exports = nextConfig;

