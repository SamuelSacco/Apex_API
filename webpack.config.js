var path = require('path')
module.exports = {
    entry: "./frontend/index.jsx",
    context: __dirname, //absolute path to current file
    output: {
        path: path.resolve(__dirname, "app"),
        filename: "bundle.js"
    },

    devtool: 'source-map',   //helps debug
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    }
}