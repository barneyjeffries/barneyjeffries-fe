/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = ( nextConfig = {} ) => {
  return {
    ...nextConfig,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: [ 'barney' ],
    },
  };
};
