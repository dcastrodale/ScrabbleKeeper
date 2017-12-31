const webpack = require('webpack');

module.exports = {
	entry : __dirname + '/src/index.js',
	output : {
		path : __dirname + '/dist',
		filename : 'app.bundle.js'
	},
	module : {
		loaders : [
			{
				test : /.jsx?/,
				loader : 'babel-loader'
			}
		]
	},
	devServer : {
		contentBase : './dist'
	}
}