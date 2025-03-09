/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
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
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
