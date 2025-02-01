/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['cdn.dribbble.com'],
    // loader: 'custom',
    // path: 'https://cdn.dribbble.com/',
  },
};

export default nextConfig;
