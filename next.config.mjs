/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/nsbecornell.github.io', // Add this line
  // assetPrefix: '/nsbecornell.github.io/', // Add this line
  images: {
    unoptimized: true, // Required for "output: export"
  },
};

export default nextConfig;