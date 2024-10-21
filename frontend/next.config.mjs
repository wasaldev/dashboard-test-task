/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.PUBLIC_BACKEND_URL,
  },
  images: {
    domains: ["img.freepik.com"],
  },
};

export default nextConfig;
