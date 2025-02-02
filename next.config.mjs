/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/nsbecornell.github.io', // Dynamically set basePath
  assetPrefix: '/nsbecornell.github.io/', // Dynamically set assetPrefix
  images: {
    unoptimized: true,
  },
};

export default nextConfig;