const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], 
    alias: {
      "@": path.resolve(__dirname, "src/"), 
      "@images": path.resolve(__dirname, "src/assets/images/") 
    }
  },
  devServer: {
    historyApiFallback: true ,
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
        test: /\.less$/,
        exclude: /\.module\.less$/,  // 排除 *.module.less，避免重复应用规则
        use: [
          {
            loader: "style-loader", // 将CSS注入到DOM中
          },
          {
            loader: "css-loader", // 处理CSS文件，支持模块化
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
      {
        test: /\.module\.less$/,  // 仅应用于命名为 *.module.less 的文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
              importLoaders: 1  // 1 means that it also applies CSS Modules on @imported resources.
            }
          },
          {
            loader: "less-loader", // 将 Less 编译成 CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ]
      },
       // 处理图片资源
       {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        include: [path.resolve(__dirname, 'src/assets/images')], // 只处理images目录下的图像文件
        generator: {
          filename: 'images/[hash][ext][query]'  // 定义输出的文件名格式
        }
      },
      // 处理字体资源（包括SVG字体）
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        type: 'asset/resource',
        include: [path.resolve(__dirname, 'src/assets/fonts')], // 只处理fonts目录下的字体文件
        generator: {
          filename: 'fonts/[name][ext][query]'  // 自定义输出文件名
        }
      }
                         
    

     
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    }),
  ],
};
