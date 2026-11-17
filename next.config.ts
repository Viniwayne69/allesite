import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  devIndicators: false,
  // Endereços antigos dos treinamentos continuam funcionando (links já divulgados).
  async redirects() {
    return [
      { source: '/apaixonados-por-vendas', destination: '/apaixonados-por-vendas-recife', permanent: true },
      { source: '/profissionalismo-a-mesa', destination: '/apaixonados-por-vendas-carpina', permanent: true },
    ];
  },
};

export default nextConfig;
