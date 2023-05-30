/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        BACK_HOST:
            process.env.NEXT_PUBLIC_BACK_HOST || 'http://localhost:5050'
    }
}

module.exports = nextConfig
