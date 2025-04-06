import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        API: process.env.API_URL,
    },
};

export default withNextIntl(nextConfig);
