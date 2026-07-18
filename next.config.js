/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.nfctron.com',
      },
    ],
  },
  /**
   * Intentional: www-pg is a public preview and must not be indexed.
   * Keep in sync with SITE_INDEXING_ENABLED in src/config/site.ts.
   * Remove this header when flipping that flag to true at launch.
   */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
