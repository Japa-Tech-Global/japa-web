/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ['localhost', 'japatalent.com'],
  },
  trailingSlash: true,
}

module.exports = nextConfig
