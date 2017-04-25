var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    //页面入口文件配置
    entry: {
        index: './src/main.js'
    },
    //入口文件输出配置
    output: {
        path: './build',
        //filename: 'bundle.[chunkhash:8].js'
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        },
        {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },{
            test: /\.vue$/,
            loader: 'babel!vue'
        },{
            test:/\.(png)|(jpg)$/,
            loader: "url",
            query: {
                limit: 1024,
                name: './img/[name].[ext]'
            }
        }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 4000,
            files: '',
            server: {
                //指定服务器启动根目录
                baseDir: './'
            }
        })
    ],
     resolve: {
        // require时省略的扩展名，如：require('app') 不需要app.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};