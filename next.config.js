/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
