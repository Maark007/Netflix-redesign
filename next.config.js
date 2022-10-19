/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BEARER_TOKEN: process.env.API_BEARER_TOKEN,
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

module.exports = nextConfig;
