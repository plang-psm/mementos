const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-lax3-1.cdninstagram.com',
        port: '',
        pathname: '/v/t51.29350-15/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons/*'],
  },
};

export default nextConfig;
