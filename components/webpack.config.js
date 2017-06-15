var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
var path = require('path');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
		entry : [
		         './app.js'
		],
		module : {
			loaders : [
			           {
			        	   test:/\.js$/,
			        	   include : path.join(__dirname,'/'),
			        	   exclude : path.join(__dirname,'/node_modules'),
			        	   loaders: 'babel-loader',
			        	   query:{
			        	   		presets : ['es2015','react']
			        	   }
			           }
			           ]
		},
		output : {
			filename : "bundle.js",
			path : __dirname + '/'
		},
		plugins : [HTMLWebpackPluginConfig]
};