import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/tiktok',
        destination: '/?utm_source=tiktok&utm_medium=bio&utm_campaign=organico',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: '/?utm_source=instagram&utm_medium=bio&utm_campaign=organico',
        permanent: false,
      },
      {
        source: '/facebook',
        destination: '/?utm_source=facebook&utm_medium=bio&utm_campaign=organico',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: '/?utm_source=youtube&utm_medium=bio&utm_campaign=organico',
        permanent: false,
      },
    ]
  },
}

export default nextConfig