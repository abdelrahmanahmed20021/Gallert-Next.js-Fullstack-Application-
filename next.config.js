/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'utfs.io',
          },
        ],
      },
}

module.exports = nextConfig