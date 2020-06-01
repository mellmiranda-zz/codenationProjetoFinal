module.exports = function babelConfig ({ cache, env }) {
  cache.invalidate(() => process.env.NODE_ENV)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: process.env.BABEL_DEBUG,
          modules: env('test') ? 'commonjs' : 'auto',
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true
          }
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'react-css-modules',
        {
          autoResolveMultipleImports: true,
          context: './src/',
          exclude: 'node_modules',
          generateScopedName: env('test')
            ? '[local]'
            : '[local]___[sha1:hash:hex:8]',
          webpackHotModuleReloading: env('development')
        }
      ],
      [
        'babel-plugin-module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@fashionista': './src/'
          }
        }
      ]
    ]
  }
}
