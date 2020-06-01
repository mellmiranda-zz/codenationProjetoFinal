module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: { grid: 'autoplace' },
      features: {
        'custom-properties': false
      }
    },
    'postcss-modules-values': {},
    'postcss-css-variables': {
      preserve: true
    },
    'postcss-import-url': {
      modernBrowser: true
    }
  }
}
