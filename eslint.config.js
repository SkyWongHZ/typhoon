module.exports = {
  // 定义处理的文件环境
  env: {
    browser: true, // 浏览器环境下的全局变量
    es2021: true, // 启用除了模块所有 ECMAScript 2021 的功能
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  // 指定解析器
  parser: "@typescript-eslint/parser", // 定义 TypeScript 解析器
  // 解析器选项
  parserOptions: {
    ecmaVersion: 12, // 允许解析现代 ECMAScript 特性
    sourceType: "module", // 允许使用模块
  },
  // 插件
  plugins: [
    "@typescript-eslint", // 使用 TypeScript 插件
  ],
  // 针对特定文件的配置
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // 指定文件匹配模式
      // 规则配置
      rules: {
        "no-unused-vars": "off", // TypeScript 已有的检查，关闭 ESLint 相应规则
        "@typescript-eslint/no-unused-vars": ["error"], // 启用 TypeScript 版本的规则
        "no-undef": "off", // TypeScript 编译时已检查，关闭 ESLint 的未定义变量检查
      },
    },
  ],
  // 规则定义
  rules: {
    semi: ["error", "always"],
    "@typescript-eslint/indent": ["error", 2],
  },
};
