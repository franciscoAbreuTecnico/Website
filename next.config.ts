import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const normalizedBasePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, '')}` : '';
const preferRelativeAssets =
  process.env.NEXT_EXPORT_RELATIVE_ASSETS === 'true' ||
  process.env.NEXT_EXPORT_RELATIVE_ASSETS === '1';

const normalizedAssetPrefix = normalizedBasePath
  ? `${normalizedBasePath}/`
  : preferRelativeAssets
    ? './'
    : undefined;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  ...(normalizedBasePath ? { basePath: normalizedBasePath } : {}),
  ...(normalizedAssetPrefix ? { assetPrefix: normalizedAssetPrefix } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withAnalyzer(nextConfig);
