const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ss = require('./src/ss_routes');
const devConf = require('./config/dev');

const ROOT_PATH = "/"

module.exports = {
    entry: {
      bundle: './src/index'
    },
    devtool: 'inline-cheap-source-map',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve:{
      alias:{
        '@ComponentsOi': path.resolve(__dirname, './node_modules/ComponentsOi/dist/index.js'),
        '@OiLib': path.resolve(__dirname, 'src', './node_modules/ComponentsOi/dist/lib/')
      }
    },
    module: devConf,
    watch: true,
    plugins: [
        new CleanWebpackPlugin('dev'),
        new Dotenv({
          path: './.env',
          safe: true,
        }),
        /* images */
        new CopyWebpackPlugin([{
            from:'./src/assets/images/**/*',
            to: '.' + ROOT_PATH + '/assets/images/[name].[ext]'
        }]),
        /* fonts */
        new CopyWebpackPlugin([{
            from:'./src/assets/fonts/**/*',
            to: '.' + ROOT_PATH + '/assets/fonts/[name].[ext]'
        }]),
        new StaticSiteGeneratorPlugin({entry: 'bundle', crawl: true}),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3300,
            server: {
                baseDir: ['dev']
            }
        }),

    ]
};
