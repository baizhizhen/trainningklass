var webpack = require('webpack')
module.exports = {
	devtool:'eval-source-map',
	entry:__dirname + "/script/main.js",
	output:{
		path:__dirname+"/public",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:"./public",
		historyApiFallback:true,
		inline:true
	}
}