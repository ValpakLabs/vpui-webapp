var path = require('path');
var Webpack = require('webpack');
var node_modules = path.join(__dirname, 'node_modules');

module.exports = {
  devtool: 'eval',

  entry: [
    "webpack/hot/dev-server",
    path.join(__dirname, 'src/main.js')
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'babel?stage=0'}
    ]
  },

  plugins: [

  ]

}