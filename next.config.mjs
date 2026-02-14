/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimisations pour Cloudflare Pages
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // Disable missing suspense warnings in static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Désactiver la génération automatique de la page 404
  skipTrailingSlashRedirect: true,
  distDir: '.next',
};

export default nextConfig;
