
const path = require('path');

module.exports = {
    entry: './frontend/entry',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']//,
        // added to resolve "Error: Can't resolve 'module'": https://stackoverflow.com/questions/38149017/webpack-2-cannot-resolve-module
        // modules: ['node_modules', path.resolve(__dirname, 'core')]
    }
    //possible to add below to resolve fs doesn't exist error:
    // node: {
    //     fs: 'empty'
    // }
};