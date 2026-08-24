import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
     reactCompiler: true,
     allowedDevOrigins: ["10.176.195.191"],
     images: {
          remotePatterns: [
               {
                    protocol: "https",
                    hostname: "picsum.photos",
               },
          ],
     },
};

export default nextConfig;
