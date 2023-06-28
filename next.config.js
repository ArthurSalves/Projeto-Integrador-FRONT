/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    publicRuntimeConfig: {
        BACK_HOST:
            process.env.NEXT_PUBLIC_BACK_HOST ||
            'https://squid-app-6o8u6.ondigitalocean.app'
    }
}

module.exports = nextConfig
