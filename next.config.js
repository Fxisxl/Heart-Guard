// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   rewrites: async () => {
//     return [
//       {
//         source: "/api/py/:path*",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/:path*"
//             : "/api/",
//       },
//       {
//         source: "/docs",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/docs"
//             : "/api/py/docs",
//       },
//       {
//         source: "/openapi.json",
//         destination:
//           process.env.NODE_ENV === "development"
//             ? "http://127.0.0.1:8000/api/py/openapi.json"
//             : "/api/py/openapi.json",
//       },
//       {
//       images: {
//         domains: ['a.storyblok.com'], 
//       }
//       },
//     ];
  

// }}

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/py/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/:path*"
            : "/api/",
      },
      {
        source: "/docs",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/docs"
            : "/api/py/docs",
      },
      {
        source: "/openapi.json",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8000/api/openapi.json"
            : "/api/py/openapi.json",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        // Pattern to match your remote images
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '', // leave empty for default
        pathname: '/f/**', // Adjust the pathname as needed for your use case
      },
    ],
  },
}

module.exports = nextConfig;

