/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  output: "export",
  swcMinify: true
};

module.exports = nextConfig;
