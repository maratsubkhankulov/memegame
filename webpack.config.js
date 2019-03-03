var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
		resolve: {
			extensions: ['.js', '.jsx']
		},
    module:{
        rules:[
					{
							exclude: /node_modules/,
							test: /\.js$|\.jsx$/,
							loader: 'babel-loader',
							query: {
								presets: ['es2015', 'react']
							}
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader'],
					},
				  {
					  test: /\.(png|svg|jpg|gif)$/,
					  use: [
					 	 'file-loader'
					  ]
				  }
				]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}