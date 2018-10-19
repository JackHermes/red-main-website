module.exports = options => {
  return {
    watch: true,
    entry: './src/index.js',
    output: {
      path: '/public/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  'babel-preset-env',
                  'babel-preset-react',
                  'babel-preset-stage-1'
                ]
              }
            },
          ]
        },
        {
          test: /.css$/,
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        }
      ]
    }
  }
}
