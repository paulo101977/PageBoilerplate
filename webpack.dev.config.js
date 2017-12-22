const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
                                            .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");


const ss = require('./src/ss_routes');
const devConf = require('./config/dev');

const ROOT_PATH = "/"

const {EXTERNALS_DEV, IMG_PLUGIN} = require('./config/common');

module.exports = {
    entry: {
      bundle: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    resolve:{
      alias:{
        '@ComponentsOi': path.resolve(__dirname, './node_modules/ComponentsOi/dist/index.js'),
        '@OiLib': path.resolve(__dirname, './node_modules/ComponentsOi/dist/lib/'),
        'react-code-splitting': path.resolve(__dirname, 'node_modules', 'react-code-splitting')
      }
    },
    module: devConf,
    /* exclude from compilation */
    externals: EXTERNALS_DEV,
    watch: true,
    devtool: "source-map",
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
        /* production config */
        new webpack.DefinePlugin({
            'process.env': {
              // This has effect on the react lib size
              'NODE_ENV': JSON.stringify('development'),
            }
        }),
        new StaticSiteGeneratorPlugin({entry: 'bundle', crawl: true}),
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
          test: /\./,
          asset: '[path].gz[query]'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3300,
            server: {
                baseDir: ['dev']
            }
        }),

    ]
};
