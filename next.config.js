const path = require("path");

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "export",
  basePath: "/PiedraSagrada",

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://th.bing.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
