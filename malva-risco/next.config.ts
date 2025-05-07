import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		includePaths: ["./src/styles"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "eleoxppxrjrvnqdwrdiz.supabase.co",
				pathname: "/storage/**",
			},
		],
	}
};

export default nextConfig;
