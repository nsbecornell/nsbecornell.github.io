/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nsbecornell.github.io/' : '', // Add this line
  // assetPrefix: '/nsbecornell.github.io/', // Add this line
  images: {
    unoptimized: true, // Required for "output: export"
  },
};

export default nextConfig;
