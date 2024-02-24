/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  remotePatterns: [
    {
      protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
    },
    {
      protocol: 'https',
        hostname: 'swww.iitbracing.org',
        port: '',
        pathname: '/**',
    },
   
  ],

},
};



export default nextConfig;
