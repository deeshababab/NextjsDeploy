/** @type {import('next').NextConfig} */
const repo = 'NextjsDeploy'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
  assetPrefix: assetPrefix,
  trailingSlash: true,
  basePath: basePath,
}

module.exports = nextConfig
