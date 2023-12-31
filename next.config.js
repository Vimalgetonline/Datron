/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    
    return [
      {
        source: "/",
        destination: "/demo",
        permanent:true
      }
    ];
  },
};

module.exports = nextConfig;
