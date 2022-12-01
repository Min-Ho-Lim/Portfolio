/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVICEID : process.env.SERVICEID,
    TEMPLATEID : process.env.TEMPLATEID,
    USERID : process.env.USERID,
  }
}

module.exports = nextConfig
