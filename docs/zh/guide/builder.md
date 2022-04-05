# 支持 Vite 和 Webpack 双构建

`Fes.js@2.1.x` 版本支持 Vite 和 Webpack 两种构建方式，不再内置构建方式，需要开发者自行选择:

-   选用 Vite 构建，安装 `npm i @fesjs/build-vite` 依赖即可。
-   选用 Webpack 构建，安装 `npm i @fesjs/build-webpack` 依赖即可。

## 使用差异

由于 Fes.js 在 Vite 和 Webpack 上做了一层封装，开发者关心的构建配置不会太多。从使用上来说，主要存在以下几个差异点：

### 配置

Webpack 和 Vite 构建在配置方面有一些差异，具体可以查看[配置](../reference/config)。

### 静态文件处理

由于 Vite 的限制，不支持 `require` 语法，具体 Vite 的用法可以查看[官网](https://cn.vitejs.dev/guide/assets.html)

### html 模版

Webpack 对于 html 模版是没有什么限制的，而 Vite 推荐模版文件就放在项目根目录下。Webpack 有个非常强大的 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)，Fes.js 引入了[vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) 进行能力的对齐，如果开发者想要个性化定制模版，那么在配置上还是存在差异的。

## 升级 2.1.x

### 不变更构建方式

直接添加 Webpack 构建依赖包即可： `npm i @fesjs/build-webpack -D`。

### 换成 Vite

1. 安装依赖包 `npm i @fesjs/build-vite`。
2. 将 Webpack 相关的配置换成 Vite，具体可查看[配置](../reference/config)。
3. 将 html 模版文件从 `public/index.html` 挪到项目根目录，如果有相应的 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 配置，需要改成 [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) 的写法。
4. 将 `require` 等 Vite 不支持的代码，改写成 Vite 支持的方式。