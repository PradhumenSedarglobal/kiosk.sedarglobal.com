/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['thumbs.dreamstime.com','api.sedarglobal.com','static.vecteezy.com', 'localhost'], 
      },
      transpilePackages: ['mui-tel-input'],
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
