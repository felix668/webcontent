
module.exports = {
	entry: {
		main: './act160901/adr/src/main.js'
	},
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		},{
			test: /\.vue$/,
			loader: 'bable!vue'
		},{
			test: /\.less$/,
			loader: 'style!postcss!css!less'
		}]
	}
};