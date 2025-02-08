/** @type {import('next').NextConfig} */
const nextConfig = { images: {
      domains: ['cdn.sanity.io'],},
      output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: "/Hackathon3-_2025", 
  assetPrefix: "/Hackathon3-_2025/",
 };
  export default nextConfig;