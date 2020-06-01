import { resolve } from 'path'

import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin'

export default function webpackDevelopmentConfig (env = {}) {
  return {
    mode: 'development',
    entry: {
      app: resolve(__dirname, 'src/index.js')
    },
    output: {
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].js',
      path: resolve(__dirname, 'public'),
      publicPath: '/'
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
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hot: true
              }
            },
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
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hot: true
              }
            },
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
        filename: 'css/[name].[hash].css'
      }),
      new NamedModulesPlugin(),
      new HotModuleReplacementPlugin()
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
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
    devServer: {
      historyApiFallback: true,
      hot: true,
      host: '0.0.0.0',
      port: 1234
    },
    stats: 'minimal'
  }
}
