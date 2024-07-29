const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 添加 .ts 和 .tsx 作为可解析扩展
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        // test设置需要匹配的文件类型，支持正则
        test: /\.css$/,
        // use表示该文件类型需要调用的loader
        use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[name]__[local]___[hash:base64:5]',
              exportLocalsConvention: "camelCase",
            }
          }
        },
        'sass-loader'
      ]
    },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // 将CSS注入到DOM中
          },
          {
            loader: "css-loader", // 处理CSS文件，支持模块化
            options: {
              modules: {
                mode: 'local', // 可以是 'local', 'global', 或 'pure'
                localIdentName: '[path][name]__[local]--[hash:base64:5]', // 定义生成的标识名
                exportGlobals: true, // 导出全局样式作为模块
              }
            },
          },
          {
            loader: "less-loader", // 将 Less 编译成 CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
       
        ],
      },
    

     
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
