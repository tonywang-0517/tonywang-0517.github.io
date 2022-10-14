/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/tonywang-0517.github.io/" : "",
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
