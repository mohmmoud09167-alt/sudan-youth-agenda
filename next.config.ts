import type { NextConfig } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPages = process.env.GITHUB_ACTIONS === 'true' && repository && !repository.endsWith('.github.io');
const assetPrefix = isProjectPages ? `/${repository}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  // vinext currently skips route prerendering when Next's basePath is set.
  // The site already uses relative navigation, so only static assets need the
  // repository prefix on GitHub Pages.
  assetPrefix,
};

export default nextConfig;

