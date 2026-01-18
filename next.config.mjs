/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/apm101-web',
    assetPrefix: '/apm101-web',
};

export default nextConfig;
