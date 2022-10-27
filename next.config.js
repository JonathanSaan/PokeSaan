const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    domains: ['cdn.traction.one'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;