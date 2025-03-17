/** @type {import('next').NextConfig} */
import withBundleAnalyzer from "@next/bundle-analyzer";

const repoName = "next-js-tlmoto-website"; // Change this to your GitHub repo name

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: `/${repoName}`, // 👈 Required for GitHub Pages
  assetPrefix: `/${repoName}/`, // 👈 Required for GitHub Pages
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withAnalyzer(nextConfig);



// /** @type {import('next').NextConfig} */
// import withBundleAnalyzer from '@next/bundle-analyzer';

// const nextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: ["./styles"],
//   },
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
// };

// const withAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// export default withAnalyzer(nextConfig);
