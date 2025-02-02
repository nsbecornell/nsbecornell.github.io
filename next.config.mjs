/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/nsbecornell.github.io' : '', // Dynamically set basePath
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nsbecornell.github.io/' : '', // Dynamically set assetPrefix
  images: {
    unoptimized: true,
  },
};

export default nextConfig;