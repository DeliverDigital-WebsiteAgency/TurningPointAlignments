/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/email',
        destination: 'https://giowm1254.siteground.biz/webmail/mail/',
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.semialignments.com' }],
        destination: 'https://semialignments.com/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
