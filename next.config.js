/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/list',
  '@fullcalendar/timeline'
]);

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/github-pages/berry-dashboard',
  assetPrefix: '/github-pages/berry-dashboard/',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  }
});

module.exports = nextConfig;
