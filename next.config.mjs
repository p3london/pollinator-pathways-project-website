/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // See: https://github.com/tinacms/tinacms/discussions/4035
    domains: ["assets.tina.io"],
  },
  output: "export",
};

export default nextConfig;
