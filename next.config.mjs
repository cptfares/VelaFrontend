// next.config.js
const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Example of custom webpack configuration
    config.resolve.alias["@"] = path.resolve(__dirname);

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  images: {
    domains: ["example.com"],
  },
  env: {
    CUSTOM_API_ENDPOINT: "https://api.example.com",
  },
};
