/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      // News → Home
      {
        source: "/news",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news/:path*",
        destination: "/",
        permanent: true,
      },

      // Drop antiguo → Merch
      {
        source: "/drop",
        destination: "/merch",
        permanent: true,
      },
      {
        source: "/drop/:path*",
        destination: "/merch",
        permanent: true,
      },

      // Shop antiguo → Merch
      {
        source: "/shop",
        destination: "/merch",
        permanent: true,
      },
      {
        source: "/shop/:path*",
        destination: "/merch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
