module.exports = [
  {
    test: /\.gql$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader',
  },
  {
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader',
  },
  {
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader", }
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