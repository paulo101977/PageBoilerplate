const { ROOT_PATH } = require('./common');

var path = require('path');
const pathName = path.resolve(__dirname , "..")
const imageName = ROOT_PATH + 'assets/images/[name].[ext]';
const fontName = ROOT_PATH + 'assets/fonts/[name].[ext]';
const otherFiles = ROOT_PATH + 'assets/[name].[ext]';


const rules = { rules: [
    {
        test: /\.js/,
        use: 'babel-loader'
    },
    {
        test: /\.(jpg|png|svg)/,
        include: pathName,
        use: {
            loader: 'file-loader',
            options: { name: imageName }
        }
    },
    {
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include: pathName,
        use: {
            loader: 'file-loader',
            options: { name: fontName }
        }
    },
    {
        test: /\.(ico|otf|pdf)/,
        include: pathName,
        use: {
            loader: 'file-loader',
            options: { name: otherFiles }
        }
    }
] }

module.exports = rules;
