/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        BACK_HOST: process.env.NEXT_PUBLIC_BACK_HOST || 'http://localhost:8080'
    }
}

module.exports = nextConfig
