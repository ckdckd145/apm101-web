/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // If you deploy to a subdirectory (e.g. username.github.io/repo-name),
    // you might need 'basePath' and 'assetPrefix'.
    // For now, assuming root or user will configure manual custom domain or root repo.
};

export default nextConfig;
