/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default withVideos({
  ...nextConfig,
});
