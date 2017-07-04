const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: [
    './src/Main.tsx'
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader"},
          { loader: "css-loader"},
          {loader: "sass-loader",}
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        }
      }, {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]'
          }
        }
      }
    ]
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