/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Para imágenes de Sanity
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/sudotechit-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sudotechit-web/' : '',
  output: 'export', // Para estático en GitHub Pages
  distDir: 'out',
}

module.exports = nextConfig