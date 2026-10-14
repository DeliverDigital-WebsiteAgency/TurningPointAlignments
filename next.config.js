/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/email',
        destination: 'https://giowm1254.siteground.biz/webmail/mail/',
        permanent: false,
      },
    ]
  },
  images: {
    // SiteGround's firewall returns 403 for /_next/image, so serve images directly.
    // Local assets are small and Unsplash URLs already carry w/q/format params.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
