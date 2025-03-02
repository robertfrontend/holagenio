/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://i.postimg.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
