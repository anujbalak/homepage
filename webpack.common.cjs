/* eslint-disable no-undef */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        homepage: "./src/web/entry/index.js",
        credits: "./src/web/entry/credits.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Homepage',
            filename: 'index.html',
            chunks: ['homepage'],
            inject: 'body'
        }),

        new htmlWebpackPlugin({
            title: 'Credits',
            filename: 'credits.html',
            chunks: ['credits'],
            inject: 'body',
            template: './src/web/main/credits/credits.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.html$/i,
            //     use: ['html-loader'],
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};