# typhoon


构建工具、路由方案、CSS 方案、数据流方案、请求库和请求方案、国际化方案、权限方案、Icons 方案
Mock
~~路由跳转~~
~~less支持~~
~~如何统一处理出错？ （除了axios里边做接口统一错误处理,暂时没想到其他优化地方）~~
如何处理更多路由，比如动态路由、嵌套路由、权限路由等？
如何使用数据流方案？
如何修改 webpack 配置或切换到 vite 构建模式   

~~环境标识  env(webpack5版本没必要做)~~
~~图片~~
~~Svg~~
封装fetch
~~封装axios~~
~~增加husky代码提交~~
~~eslint支持~~
~~i18n国际化支持~~


未解决
less支持css module写法
字体方案iconfont未被正常引入


数据流
https://github.com/pmndrs/
useContext使用



src/
│
├── api/                # API 相关的功能，包括 axios 实例
│   ├── axios.ts       # 自定义 axios 实例
│   └── services.ts     # API 调用服务
│
├── components/         # UI 组件
│   ├── Button/         # 按钮组件
│   └── Header/         # 头部组件
│
├── assets/             # 静态资源，如图片、样式文件等
│   ├── images/         # 图片资源
│   └── styles/         # 全局样式文件
│
├── utils/              # 工具函数
│
├── store/              # 状态管理，例如 Redux 或 Vuex
│
├── views/              # 页面组件
│
└── index.jsx          # 应用入口文件


路由鉴权

