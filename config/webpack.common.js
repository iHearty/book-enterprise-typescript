var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
   entry: {
      'bundle': './src/bundle.ts',
      'app': './src/index.tsx'
   },
   output: {
      filename: "./dist/app.js",
   },

   resolve: {
      extensions: ['', ".webpack.js", ".web.js", ".ts", ".tsx", '.js', '.ts']
   },

   module: {
      loaders: [
         {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader']
         },
         {
            test: /\.tsx?$/,
            loaders: ["ts-loader"]
         },
         {
            test: /\.html$/,
            loader: 'html'
         },
         {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
         },
         {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
         },
         {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader: 'raw'
         },
         {
            test: /\.scss$/,
            include: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css!sass')
         }
      ]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: ['app', 'bundle']
      }),
      new CopyWebpackPlugin([
         {from: 'public/js/jquery-3.1.1.js', to: 'js'},
         {from: 'public/css/styles.css', to: 'css'},
      ]),
      new HtmlWebpackPlugin({
         template: 'src/index.html',
         favicon: 'favicon.ico'
      })
   ]
};
