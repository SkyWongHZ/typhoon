# TYPHOON 项目

## 简介

TYPHOON 是一个基于 TypeScript 的现代 Web 应用框架，配备了构建工具、路由解决方案、CSS 方案以及状态管理。该项目使用 Webpack 进行模块打包，并通过 ESLint 保持代码质量。

## 特性

### 已实现功能

- **路由方案**：提供灵活的页面跳转和路由鉴权方案。
- **Less 支持**：已支持 Less 预处理器。
- **错误处理**：在 axios 中实现了接口的统一错误处理。
- **图片和 SVG 支持**：已实现图片和 SVG 的加载和使用。
- **封装 Axios**：优化了网络请求的处理。
- **代码质量工具**：集成了 ESLint、Husky。
- **数据流方案**：使用 Zustand 做数据状态管理。
- **国际化支持**： i18n支持多语言切换。


### 计划中的功能

- **Webpack 到 Vite 的迁移**：考虑如何修改现有 Webpack 配置或切换到 Vite 构建模式。
- **CSS Module 支持**：加强对 CSS Module 的支持。
- **字体方案**：解决 iconfont 字体未被正常引入的问题。

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/SkyWongHZ/typhoon.git

# 进入项目目录
cd TYPHOON

# 安装依赖
npm install

# 启动开发服务器
npm start


项目结构
TYPHOON/
│
├── dist/ # 打包输出目录
├── node_modules/ # 依赖包目录
├── src/ # 源代码目录
│ ├── assets/ # 静态资源，如图片和样式文件
│ ├── components/ # UI 组件
│ ├── locales/ # 国际化资源文件
│ ├── routes/ # 路由配置文件
│ ├── store/ # 状态管理，使用 Redux 或 Zustand
│ │ └── countStore.ts # 示例状态管理文件
│ ├── utils/ # 工具函数
│ ├── views/ # 页面视图组件
│ │ └── NotFoundPage.tsx # 404 错误页组件
│ ├── App.tsx # 应用主组件
│ ├── index.html # 入口 HTML 文件
│ ├── index.tsx # 应用入口 TypeScript 文件
│ └── typings.d.ts # TypeScript 类型定义文件
│
├── .babelrc # Babel 配置文件
├── .env # 环境变量配置文件
├── package.json # npm 包配置文件，包括依赖和脚本
├── tsconfig.json # TypeScript 配置文件
└── webpack.config.js # Webpack 配置文件