/** @type {import('next').NextConfig} */
const repo = 'https://github.com/deeshababab/NextjsDeploy.git'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
  assetPrefix: "/demo",
  trailingSlash: true,
  basePath: "/demo",
}

module.exports = nextConfig
