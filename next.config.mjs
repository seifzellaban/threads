// You're in the future, so let's embrace ES module syntax.
// If you wanna be fancy and use ES module syntax, do it consistently.

// Importing types from Next.js
/** @type {import('next').NextConfig} */

// Define your Next.js config
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // TypeScript stuff. Ignoring build errors like a boss.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;