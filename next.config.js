/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "banner2.cleanpng.com",
        port: "",
        pathname: "/my-bucket/**",
      },
    ],
    domains: ["images.unsplash.com"], // Add 's.gravatar.com' as a valid domain
  },
};
