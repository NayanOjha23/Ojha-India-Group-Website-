import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/real-estate",
        destination: "/commercial-spaces",
        permanent: true,
      },
      {
        source: "/real-estate/:path*",
        destination: "/commercial-spaces/:path*",
        permanent: true,
      },
      {
        source: "/hub-operations",
        destination: "/warehousing/logistics",
        permanent: true,
      },
      {
        source: "/hub-operations/:path*",
        destination: "/warehousing/logistics/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
