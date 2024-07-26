const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // 添加 .ts 和 .tsx 作为可解析扩展
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000
  },
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader'
            }
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader', // 将 JS 字符串生成为 style 节点
              },
              {
                loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
              },
              {
                loader: 'less-loader', // 将 Less 编译成 CSS
                options: {
                  lessOptions: {
                    javascriptEnabled: true
                  }
                }
              }
            ]
          }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};