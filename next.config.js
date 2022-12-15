/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    STOREFRONT_TOKEN: 'c44c6881fcd2bee10cf4ab20c04b0ae5'
  }
}

module.exports = nextConfig
