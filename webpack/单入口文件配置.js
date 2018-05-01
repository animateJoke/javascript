var webpack=require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var vue = require('vue-loader');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    //入口
    entry : './entry/entry.js',
    //出口
    output : {
        path : path.resolve(__dirname, 'output'),
        filename : 'bundle.js'
    },
    //开发版本
    mode : "development",
    resolve : {
        alias : {
            vue : 'vue/dist/vue.js'
        }
    },
    devServer : {
        contentBase : './output',
        historyApiFallback : true, //不跳转
        port : 12345,
        //port 设置默认监听端口，如果省略，默认为”8080“
        inline : true //实时刷新
    },
    module : {
        rules : [{
            test : /\.css$/,
            use : ['style-loader', 'css-loader']
        }, {
            test : /\.(png|jpg|gif|jpeg)$/,
            use : [{
                loader : 'file-loader',
            }]
        }, {
            test : /\.txt$/,
            use : 'raw-loader'
        }, {
            test : /\.(html)$/,
            use : {
                loader : 'html-loader',
                options : {
                    attrs : [':data-src']
                }
            }
        }, {
            test : /\.eot/,
            loader : 'file-loader?prefix=font/'
        }, {
            test : /\.woff/,
            loader : 'file-loader?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test : /\.ttf/,
            loader : 'file-loader?prefix=font/'
        }, {
            test : /\.svg/,
            loader : 'file-loader?prefix=font/'
        }, {
            test : /\.(vue)$/,
            use : {
                loader : 'vue-loader',
            }
        }, {
            test : /\.js$/,
            use : {
                loader : 'babel-loader'
            }
        }]
    },
    // watch : true,
    plugins : [
        new UglifyJsPlugin(),
        new webpack.LoaderOptionsPlugin({
            test : /\.vue$/,
            babel : {
                presets : ['es2015'],
                plugins : ['transform-runtime']
            }
        })
        // new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};