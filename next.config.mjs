/** @type {import('next').NextConfig} */

// When building for GitHub Pages (project site served from /<repo>),
// prefix routes/assets with the repo name. The CI workflow sets GITHUB_PAGES=true.
const isPages = process.env.GITHUB_PAGES === 'true';
const repo = 'bingx-portfolio';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath: isPages ? `/${repo}` : '',
  assetPrefix: isPages ? `/${repo}/` : '',
};

export default nextConfig;
