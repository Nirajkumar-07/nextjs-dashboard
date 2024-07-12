/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
};

export const experimental_ppr = true;

export default nextConfig;
