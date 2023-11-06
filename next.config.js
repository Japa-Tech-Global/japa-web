/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ['localhost', 'japatalent.com'],
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
