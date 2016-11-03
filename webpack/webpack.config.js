const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main',
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude : /node_modules/,
            loader: 'babel'
        }, {
            test: /\.styl$/,
            loader: 'style!css?sourceMap!stylus?sourceMap'
        }, {
            test: /\.pug$/,
            loader: 'pug'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file?name=[name].[ext]!image-webpack'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.styl', '.pug']
    },
    resolveLoader: {
        moduleDirectories : ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug'
      })
    ]
  };