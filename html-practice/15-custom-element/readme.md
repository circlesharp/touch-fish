# Custom Elements

## 创建

```js
// 注册一个 custom element
// 返回已注册 custom elements 的信息
CustomElementRegistry

/**
 * 注册一个 custom element
 * @param {string} 名称 custom-element 的名称不能是单个单词，且其中必须要有短横线。
 * @param {Constructor} 定义元素行文的类
 * @param {{ extends: string }} 创建的元素继承自哪个内置元素
 */
CustomElementRegistry.define('word-count', WordCount[, {extends: 内置元素}])
```

## custom element 的分类

1. Autonomous custom elements
   1. 独立的元素, 不继承其他内建的 HTML 元素
   2. 总是继承自 HTMLElement
   3. `<popup-info>`
   4. `document.createElement("popup-info")`
2. Customized built-in elements
   1. 继承自基本的 HTML 元素
   2. `<p is="word-count">`
   3. `document.createElement("p", { is: "word-count" })`
