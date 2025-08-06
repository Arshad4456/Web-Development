/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.hubspot.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
