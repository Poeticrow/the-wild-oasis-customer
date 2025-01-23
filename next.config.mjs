/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utedxiawaftatouykash.supabase.co",
        port: "",
        // pathname: "/storage/v1/object/sigb/cabin-images/**",
        pathname: "/storage/v1/object/public/cabin-images/**",
        // search: "",
      },
    ],
    // domains: ["utedxiawaftatouykash.supabase.co"],
  },
  // output: "export",
};

export default nextConfig;
