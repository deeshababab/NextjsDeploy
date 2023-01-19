/** @type {import('next').NextConfig} */
const repo = 'https://github.com/deeshababab/NextjsDeploy.git'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
  assetPrefix: assetPrefix,
  trailingSlash: true,
  basePath: basePath,
}

module.exports = nextConfig
