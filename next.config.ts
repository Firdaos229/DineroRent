// import type { NextConfig } from "next";
// //import { withNextVideo } from 'next-video/process';


// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: 'i.ibb.co.com',
//         pathname: "**",
//       },
//     ],
//   },
// };

// //module.exports = withNextVideo(nextConfig);

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "**",
      },
    ],
  },
  typescript: {
    // ✅ Ignore les erreurs TypeScript au build (temporaire)
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
