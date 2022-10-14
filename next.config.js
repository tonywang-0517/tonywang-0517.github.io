/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "/tonywang-0517.github.io/",
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
