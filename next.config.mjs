import fs from "fs";
import path from "path";

const cwd = process.cwd();
const redirectsPath = path.join(cwd, "redirects.json");
const redirects = JSON.parse(fs.readFileSync(redirectsPath, "utf8"));

const isEditable = process.env.NEXT_PUBLIC_EDITABLE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const redirectEntries = [];
    if (!isEditable) {
      redirectEntries.push({
        source: "/admin",
        destination: "https://p3-editable.vercel.app/admin",
        permanent: false,
      });
      redirectEntries.push({
        source: "/admin/:path",
        destination: "https://p3-editable.vercel.app/admin/:path",
        permanent: false,
      });
    }
    redirectEntries.push(...redirects);
    return redirectEntries;
  },
  images: {
    domains: ["assets.tina.io"],
  },
  // TODO: figure out TinaCMS 500 errs
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
};

export default nextConfig;
