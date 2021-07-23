const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: './'
  },
  devtool: 'source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  devServer: {
    port: 3000,
    disableHostCheck: true,
    // proxy: [
    //   allows redirect of requests to webpack-dev-server to another destination
    //   {
    //     context: ["/api","/auth", "/account"], // can have multiple
    //     target: "http://localhost:4000", // server and port to redirect to
    //     secure: false
    //   }
    // ],
    open: 'brave',
    historyApiFallback: true,
    contentBase: "./",
    compress: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

module.exports = config;