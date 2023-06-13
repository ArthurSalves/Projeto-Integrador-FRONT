/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        BACK_HOST: process.env.NEXT_PUBLIC_BACK_HOST || 'http://localhost:3333'
    }
}

module.exports = nextConfig
