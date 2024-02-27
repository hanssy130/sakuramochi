/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/volunteering',
            destination: '/volunteer',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
