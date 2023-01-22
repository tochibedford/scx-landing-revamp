/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    STOREFRONT_TOKEN: 'a223ec33fc9c70027e9902f4f9e5fc6f'
  }
}

module.exports = nextConfig
