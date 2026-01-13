import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // next/image使うならハマり回避
};

export default nextConfig;
