const svgrTemplate = require('./src/utils/svgr-template')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData:
      '@use "styles/media" as *; @use "styles/functions" as *;'
  },
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                }
              ]
            },
            template: svgrTemplate,
            replaceAttrValues: {
              '#fff': '{props.color || "currentColor"}',
              '#FFF': '{props.color || "currentColor"}'
            }
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig
