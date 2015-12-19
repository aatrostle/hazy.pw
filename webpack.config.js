var path = require('path')
var webpack = require('webpack')

var env = process.env.MIX_ENV || 'dev'
var prod = env === 'prod'

var entry = './web/static/js/app.js'
var plugins = [new webpack.NoErrorsPlugin()]
var loaders = ['babel-loader']
var publicPath = 'http://localhost:4001/'

if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin())
  loaders.unshift('react-hot')
}

module.exports = {
  devtool: prod ? null : 'eval-source-map',
  entry: prod ? entry : [
    `webpack-dev-server/client?${publicPath}`,
    'webpack/hot/only-dev-server',
    entry
  ],
  output: {
    path: path.join(__dirname, './priv/static/js'),
    filename: 'app.js',
    publicPath: publicPath
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: loaders,
      }
    ]
  }
}
