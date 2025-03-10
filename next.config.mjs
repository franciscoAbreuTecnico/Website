/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: isProd ? './' : '',
  basePath: isProd ? '' : '',
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);
