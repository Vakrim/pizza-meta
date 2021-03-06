var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
	exclude: ['node_modules']
});

module.exports = {
	entry: [
		'./src/index.jsx',
		'./styles/index.scss'
	],
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
      src: `${ ROOT_PATH }/src/`,
      p: `${ ROOT_PATH }/src/p`,
      config: `${ ROOT_PATH }/config/`,
      images: `${ ROOT_PATH }/images/`,
      lib: `${ ROOT_PATH }/src/lib`,
      pages: `${ ROOT_PATH }/src/pages/`,
      stores: `${ ROOT_PATH }/src/stores/`
    }
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin("style.css", {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: 'src/template.ejs'
		})
	]
};
