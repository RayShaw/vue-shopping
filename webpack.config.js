var path = require("path");
// import path from "path";
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var config = {
  mode: "none",
  entry: {
    main: "./main"
  },
  output: {
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist/",
    // filename: "main.js"
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallback: "vue-style-loader",
              use: "css-loader"
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use: [
        //   "style-loader",
        //   "css-loader"
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(git|jpg|png|woff|svg|eot|tff)\??.*$/,
        loader: 'url-loader?limit=1024'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "less-loader"
        })
      }
    ]
  },
  plugins: [
    // 重命名提取后的css文件
    // new ExtractTextPlugin("main.css")
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ]
};

// module.export=config相当于export default config 
// 目前还没有安装支持es6插件 不能直接使用es6
module.exports = config;
// export default config;