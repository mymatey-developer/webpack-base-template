const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    watch: true,
    entry: {
        app:__dirname + '/src/react/app.js',
        script: __dirname + '/src/script.js',
        styles: __dirname + '/src/sass/style.scss'
    },
    output: {
        path: __dirname + '/assets/js',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        rules: [{
            test: /\.(css|sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('../css/[name].css', {
            allChunks: true,
        }),
        new CopyWebpackPlugin([
            {from: __dirname + '/src/img',to:'../img'}
        ]),
        new CopyWebpackPlugin([
            {from: __dirname + '/src/json',to:'../json'}
        ])
    ]
};