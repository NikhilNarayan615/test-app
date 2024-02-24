/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  
  images: {
  remotePatterns: [
    
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
