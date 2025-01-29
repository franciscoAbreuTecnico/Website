/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';
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

export default withVideos({
  ...nextConfig,
});
