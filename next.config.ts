import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
    transpilePackages: ["next-mdx-remote"],
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
        deviceSizes: [640, 1200],
        imageSizes: [],
        formats: ["image/webp"],
    },
};

export default withMDX(nextConfig);
