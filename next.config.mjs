/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so", "developer.apple.com", "placehold.jp", "s3-us-west-2.amazonaws.com"],
  },
};

export default nextConfig;
