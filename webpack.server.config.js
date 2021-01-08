const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/server/server.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'node',
  node: { 
    // __dirname and __filename return / or blank otherwise
    __dirname: false, 
    __filename: false, 
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        // Transpile ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
}