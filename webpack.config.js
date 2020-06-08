const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractCSS = require('extract-text-webpack-plugin');

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'static');

const config = {
    entry: ['@babel/polyfill', ENTRY_FILE],
    mode: MODE.replace(/\s/g, ''),
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        // css를 load
                        loader: 'css-loader',
                    },
                    {
                        // 특정 plugin들을 css에 대해 실행
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: 'cover 99.5%' })];
                            },
                        },
                    },
                    {
                        // Sass를 css로 변환
                        loader: 'sass-loader',
                    },
                ]),
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: '[name].js',
    },
    plugins: [new ExtractCSS('styles.css')],
};

module.exports = config;
