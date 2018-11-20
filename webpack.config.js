module.exports = options => {
  return {
    mode: 'development',
    watch: true,
    entry: './src/index.js',
    devtool: 'inline-source-map',
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
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        }
      ]
    }
  }
}
