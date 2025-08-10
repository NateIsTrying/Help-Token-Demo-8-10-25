/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/helptoken-demo' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/helptoken-demo' : ''
  }
  
  module.exports = nextConfig