/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images:{
      domains: ['i.scdn.co'],
      formats: ['image/avif','image/webp']
    }
}
