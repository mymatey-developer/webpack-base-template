const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("DIRNAME =>" + __dirname);
console.log(path.resolve(__dirname, '/assets/js/react'));

module.exports = {
    watch: true,
    entry: {
        'js/react/app.js': __dirname + '/src/react/app.js',
        'css/style.css': __dirname + '/src/sass/style.scss'
    },
    output: {
        path: __dirname + '/assets',
        filename: '[name]',
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
        new ExtractTextPlugin({ // define where to save the file
            filename: __dirname + '/assets/css/[name].css',
            allChunks: true,
        }),
    ]
};