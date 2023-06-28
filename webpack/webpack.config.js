const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const CWD = process.cwd()

const outputPath = path.resolve(CWD, 'dist')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: outputPath,
    filename: '[name].[hash].js'
  },
  devServer: {
    port: 3003,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/index.html'}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader']
      }
    ]
  }
}