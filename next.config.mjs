/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dr1mu1lzhnayes2o.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
