/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';
import withBundleAnalyzer from '@next/bundle-analyzer';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(withVideos({
  ...nextConfig,
}));
