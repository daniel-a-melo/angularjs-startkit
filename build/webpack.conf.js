var webpack = require('webpack');
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');

var NPM_EVENT = process.env.npm_lifecycle_event;
var isBuild = NPM_EVENT === 'build';
var srcDir = path.resolve(__dirname, 'src/ts');
var outputDir = path.resolve(__dirname, '../dist');

var webpackConfig = {
  entry: {
    app: './src/main.js',
    vendor : './src/vendor.js'
  },
  output: {
    path: outputDir,
    filename: '[name].bundle.js'
  },
  devTool : 'cheap-module-source-map',
  resolve: {
    extensions: ['', '.js'],
  },
  module : {
      loaders: [
         { test: /\.html$/, loader: 'raw-loader' },
         { test: /\.css$/, loader: 'style!css?localIdentName=[name]__[local]___[hash:base64:5]' },
         { test: /\.jpe?g$|\.gif$|\.png$/, loader: "file"},
         { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
         { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
         { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?mimetype=application/octet-stream" },
         { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
         { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
         { test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$' }
      ],
  },
  plugins : [
    // new webpack.ProvidePlugin({
    //    $: "jquery",
    //    jQuery: "jquery"
    // }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js')
  ],
  
  devServer : {
    host: '0.0.0.0',
    port : 8000,
    historyApiFallback: true,
    noInfo: false,
    contentBase : 'app',
  }

}

if (isBuild) {

  //delete webpackConfig.entry['tests'];

  webpackConfig.plugins.push(new CopyWebpackPlugin([
      { context : 'app', from: '**/*', to : outputDir }
  ], {
    ignore : [
      'old-index.html'
    ]
  }));

}

module.exports = webpackConfig;
