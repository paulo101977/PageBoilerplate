const path = require('path');
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ss = require('./src/ss_routes');

const prodConf = require('./config/prod');

const EXTERNALS = require('./config/common').EXTERNALS;

module.exports = {
    entry: {
      bundle: './src/pages/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: "PageBoilerplate"
    },
    /* exclude from compilation */
    externals: EXTERNALS,
    devtool: "cheap-module-source-map",
    module: prodConf,
    resolve:{
      alias:{
        '@ComponentsOi':
            path.resolve(__dirname, './node_modules/ComponentsOi/dist/index.js'),
        '@ComponentsOiLib':
            path.resolve(__dirname, './node_modules/ComponentsOi/dist/lib/')
      }
    },
    plugins: [
        new CleanWebpackPlugin('./dist'),
        /* copy images */
        new CopyWebpackPlugin([{
            from:'./src/assets/images/**/*.png',
            to: './assets/images/[name].[ext]'
        }]),
        /* copy actions */
        new CopyWebpackPlugin([{
            from:'./src/actions/**/*',
            to: './actions/[name].[ext]'
        }]),
        /* copy reducers */
        new CopyWebpackPlugin([{
            from:'./src/reducers/**/*',
            to: './reducers/[name].[ext]'
        }]),
        /* production config */
        new webpack.DefinePlugin({
            'process.env': {
              // This has effect on the react lib size
              'NODE_ENV': JSON.stringify('production'),
            }
        }),
        /* uglification */
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            comments: false, // remove comments
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            		drop_console: true
            },
            mangle: false,
            sourceMap: true, /* fix issue on uglify */
            output: {comments: false}
        }),
        /* others plugins config */
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.IgnorePlugin(
            /^\.\/locale$/,
            /moment$/
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
