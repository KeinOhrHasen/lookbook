/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lookbookbucket.s3.amazonaws.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
