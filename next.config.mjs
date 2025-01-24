import path from "path";
export default {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve("./");

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
