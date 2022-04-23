# Evan You's Vite Talking

## Address

[Video in YouTube](https://www.youtube.com/watch?v=UJypSr8IhKY&list=PLXigXKBVU74P9oDhvngASCibXH88zSQjL&index=19)

## Get Starting

1. `yarn add -D vite`
2. 在 index.html 中, 通过 `type="module"` 的方法引入 es6 模块
3. 在 index.html 中, 通过 `<link>` 引入 css
4. 在 vite 中, 入口是 index.html, 而不是 webpack 的 main.js; 所以, 在 vite.config.js 中, 可以指定 root 字段
5. css module 是开箱即用的, 不需要配什么 css-loader, className 会被编译成 id

## css

1. tailwind: 根据官方教程即可, 但需要配置 postcss.config.js
2. sass:
