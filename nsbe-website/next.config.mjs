/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nsbe-website", // Ensure it matches your repository name
    assetPrefix: "/nsbe-website/",
    images: {
      unoptimized: true, // Required for "output: export"
    },
  };
  
  export default nextConfig;