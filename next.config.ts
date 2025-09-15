import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: '/out',
  basePath: '/out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withAnalyzer(nextConfig);
