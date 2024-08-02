####
webpack待引入配置
webpajck可做的操作

设置路径简写 @xxxx


替换 scripts 部分中的 react-scripts 为 react-app-rewired

代码拆分  
加载器loaders
插件plugin
性能优化
开发服务器webpack-dev-server
环境变量env
Sourcemap


MiniCssExtractPlugin

依赖包按需加载减少包体积大小

1. 设置别名（Alias）
在 Webpack 配置中，你可以通过 resolve.alias 来设置模块导入的别名，这样可以简化模块路径，使其更易于管理和引入。
module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@assets': path.resolve(__dirname, 'src/assets/')
    }
  }
}





按需加载第三方库（如 antd）
为了按需加载 antd 或其他库的组件和样式，你可以使用 babel-plugin-import：
// 在 Babel 配置中
module.exports = {
  plugins: [
    ['import', { libraryName: 'antd', style: 'css' }, 'antd'],
    // 如果使用 antd-mobile
    ['import', { libraryName: 'antd-mobile', style: 'css' }, 'antd-mobile']
  ]
};



React 模块热替换
 开启持久化存储缓存


