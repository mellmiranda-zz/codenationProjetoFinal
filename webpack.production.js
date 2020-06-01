import { resolve } from 'path'

import { HashedModuleIdsPlugin } from 'webpack'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default function webpackProductionConfig (env = {}) {
  return {
    mode: 'production',
    entry: {
      app: resolve(__dirname, 'src/index.js')
    },
    output: {
      chunkFilename: 'js/[id].[name].[chunkhash:8].js',
      filename: 'js/[name].[hash:8].js',
      path: resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.svg$/,
          loader: '@svgr/webpack'
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ],
          exclude: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  context: resolve(__dirname, 'src'),
                  localIdentName: '[local]___[sha1:hash:hex:8]'
                }
              }
            },
            'postcss-loader'
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        appMountId: 'app',
        meta: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1'
        },
        template: resolve(__dirname, 'src/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new HashedModuleIdsPlugin()
    ],
    optimization: {
      nodeEnv: 'production',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name (module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1]
              return `npm.${packageName.replace('@', '')}`
            },
            chunks: 'all'
          },
          styles: {
            name: 'styles',
            test: /(?<!module)\.css$/,
            chunks: 'all',
            enforce: true
          },
          components: {
            name: 'components',
            test: /\.css$/,
            chunks: 'all',
            minChunks: 3
          }
        }
      }
    },
    stats: 'errors-only'
  }
}
