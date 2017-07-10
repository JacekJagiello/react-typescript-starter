const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
  devtool: 'source-map',
  
  entry: [
    './src/Main.tsx'
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    loaders: require('./webpack/loaders')
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new CheckerPlugin()
  ],

  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "bundle.js"
  }
}

module.exports = config