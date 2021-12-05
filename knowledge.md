# 面试知识点 - 撷宇总结

## 什么是盒子模型

1. 是渲染树经过 Layout 的产物
2. 组成：内容(content)、内边距(padding)、边框(border)、外边距(margin)
3. 标准盒模型(box-sizing: content-box)： width 就是 content 的 width
4. 怪异盒模型(box-sizing: border-box)： width 就是 content + padding + border

## 实现垂直水平居中

todo

## 简述 src 和 href 的区别

1. href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联，是在当前元素和引用资源之间建立联系
2. src 表示引用资源，表示替换当前元素，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。
3. 它们之间的主要区别可以用这样一句话来概括：src 用于替代这个元素，而 href 用于建立这个标签与外部资源之间的关系。

## px 和 em 的区别

todo

## 行内元素有哪些？块级元素有哪些？空（void）元素有哪些？

### 行内元素

a
b(粗体文本)
img
input
span(如果不对 span 应用样式，那么 span 元素中的文本与其他文本不会任何视觉上的差异。)
select : 创建单选或多选菜单
strong: strong 标签和 em 标签一样，用于强调文本，但它强调的程度更强一些

### 块级元素

div
ul :无序列表
li ：列表，li 标签定义列表项目。li 标签可用在有序列表 (ol) 和无序列表 (ul) 中。
ol ：有序列表
dl, dt, dd: 标签定义了定义列表（definition list）。dl 标签用于结合 dt （定义列表中的项目）和 dd （描述列表中的项目）。
h1 、h2、h3…
p：定义段落

### 空元素

空元素通常没有闭标签
br: 换行
hr: 当内容的主题发生变化时，使用 hr 标签进行分隔，并显示为一条水平线。
img: 元素向网页中嵌入一幅图像。请注意，从技术上讲，img 标签并不会在网页中插入图像，而是从网页上链接图像。img 标签创建的是被引用图像的占位空间。img 标签有两个必需的属性：src 属性 和 alt 属性(如果无法显示图像，浏览器将显示替代文本)。
input: 标签规定用户可输入数据的输入字段。根据不同的 type 属性，输入字段有多种形态。输入字段可以是文本字段、复选框、密码字段、单选按钮、按钮等等。
link: 标签定义文档与外部资源的关系。link 标签最常见的用途是链接样式表。
meta: 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词 meta 标签位于文档的头部，不包含任何内容。meta 标签的属性定义了与文档相关联的名称/值对。

## 简述同步和异步的区别

todo

## Doctype 作用？严格模式与混杂模式如何区别？它们有何意义？

### Doctype 作用

1. !DOCTYPE 声明位于 HTML 文档中的第一行，处于 html 标签之前
2. 告知浏览器的解析器用什么文档标准解析这个文档
3. DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。

### 严格模式和混杂模式的如何区分？他们有什么意义？

1. 标准模式(严格模式)的排版和 JS 运作模式都是以该浏览器支持的最高标准运行。
2. 在兼容模式（混杂模式或怪异模式）中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

## Null 和 undefine 的区别

null: 表示暂且空值，未来有值，一般用于释放引用类型数据
undefined: 表示未定义，一般是指一个变量只是声明而没有赋值

## 简述你对 json 的了解

1. JSON(JavaScript Object Notation, js 对象记号) 是一种轻量级的数据交换格式
2. 简单说就是 JavaScript 中的对象和数组

## 什么是 Ajax

1. 异步 JavaScript 和 XML, 创建动态网页的技术
2. 通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。
3. 这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

## a 标签的四个伪类

1. LV,HA: link, visited, hover, active
2. 这 4 个伪类特指度相同(a:hover 必须位于 a:link 和 a:visited 之后; a:active 必须位于 a:hover 之后)
3. 一个链接可能同时处于多种状态，即同时属于多个伪类。
4. link 和 visited 是常态效果，hover 和 active 是瞬时效果。

## 伪类与伪元素

todo

## img 的 alt 和 title 有什么区别

1. alt: 是图片内容的等价描述，用于图片无法加载时显示，读屏器阅读图片；
2. title: 可提高图片高可访问性，除了纯装饰图片外可设置有意义的值, 搜索引擎会重点分析; 鼠标滑过时显示的文字提示

## 标签的隐藏（display:none 和 visibility:hidden）的区别？

1. display:none 是彻底消失，不在文档流中占位，浏览器也不会解析该元素；
2. visibility:hidden 是视觉上消失了，可以理解为透明度为 0 的效果，在文档流中占位，浏览器会解析该元素；

## Label 的作用是什么？如何使用？

label 便签用可以让用户点击文字区域，自动聚焦到当前项的控件。
控件设置 id 属性，label 设置 for 属性，for 属性的属性值为 id 属性值。

# InfoQ - JS

## 内置类型

1. 7 种，可分： 基本类型、对象
2. 基本类型： null, undefined, number, boolean, string, symbol

## typeof

1. 对于基本类型，除了 null 误判为对象，其他都是准确的
2. 对于对象，除了 function 判断为 function, 其他都是 object
3. 更精确用 Object.prototype.toString.call() => [object Type]

## 类型转换

### 转 boolean

1. 除了 undefined, null, 0, -0, NaN, false, '' 这 7 种都是 false
2. 其他都是 true

### 对象转基本类型

1. [Symbol.toPrimitive] > valueOf > toString

## 原型

1. 每个函数都有 prototype 属性，指向原型
2. 每个对象都有 _proto_ 属性，指向构造函数的原型
3. _proto_ 将对象连接起来组成原型链，寻找不属于该对象的属性

## new

1. 生成一个新的对象
2. 链接到构造函数的原型
3. 绑定 this
4. 返回这个对象

```js
function create(Constructor, ...args) {
  const obj = {}; // 创建一个对象
  obj.__proto__ = Constructor.prototype; // 链接到构造函数的原型
  const privateObj = Constructor.apply(obj, args); // 绑定 this
  return typeof privateObj === 'object' ? privateObj : obj; // 返回这个对象
}
```

## instanceOf

1. 能正确判断类型
2. 机制是判断对象原型链中能否找到类型的 prototype

## 深浅拷贝

### 浅拷贝

1. Object.assign
2. Array.from
3. {...}, [...]

### 深拷贝

必要性：

1. 赋值一个引用类型的并不是值，而是指针
2. 属性的对象、数组就需要具有树的结构，需要对树进行遍历
3. 引用类型还有其他，要分别处理
4. 要解决循环引用的问题
5. JSON 静态方法具有局限性

方法一： 使用 JSON： 有 3 个缺点： 不能序列化 undefined, 不能序列化一些数组、对象外的引用类型， 不能解决循环引用
方法二： 使用 递归 + hash:

```js
function deepClone(source, hash = new WeakMap()) {
  // 不是对象，直接返回
  if (
    typeof source !== 'object' ||
    typeof source !== 'function' ||
    source == null
  ) {
    return source;
  }

  // 1. Function
  if (checkType(source) === 'Function') {
    return new Function(`return ${source.toString()}`).call(this);
  }

  // 2. Date
  if (checkType(source) === 'Date') {
    return new Date(source.valueOf());
  }

  // 3. RegExp
  if (checkType(source) === 'RegExp') {
    return new RegExp(source);
  }

  // 4. Object && 5. Array
  const rst = Array.isArray(source) ? [] : {};

  // 注意循环引用
  if (hash.has(source)) {
    return hash.get(source);
  }
  hash.set(source, rst);

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      rst[key] = deepClone(source[key]， hash);
    }
  }
  return rst;
}

function checkType(source) {
  return Object.prototype.toString.call(source).slice(8, -1);
}
```

## map, weakMap 的区别

1. weakMap 只接受对象作为键名
2. weakMap （弱引用）键名所指的对象，不计入垃圾回收机制

## 什么是 proxy

todo

## 小数精度问题

1. 采用 IEEE 双精度标准的语言都有此问题
2. 解决方案： `parseFloat(num.toFixed(10));`

## V8 的垃圾回收机制

V8 采用 分代式垃圾回收机制：新生代算法、老生代算法
将内存分为新生代、老生代两部分

### 新生代算法 Scavenge GC

1. 内存分为两部分： From 空间 & To 空间, 一个是使用的，另一个是空闲的
2. 新分配的对象放入 From 空间
3. 当 From 占满， 存活的对象并复制到 To， 失活的对象销毁
4. From To 互换

### 老生代算法

1. From To 互换时， 若存活对象多（> 25%）, 转到老生代空间
2. 优先启动 标记清楚算法（遍历，标记活对象，销毁没有被标记的）
3. 内存碎片多时启动 标记压缩算法（将活对象向一端移动，清除碎片）

# InfoQ - 浏览器

## 事件机制

### 事件触发 3 阶段

1. 一般来说，是 document 往事件触发处传播，遇到注册的捕获事件会触发……即，捕获-目标-冒泡
2. 如果给同一结点同时注册了冒泡和捕获，事件触发会按照注册的顺序来执行

### 事件代理

1. 利用事件冒泡机制，在父组件注册事件
2. 优点是 节省内存、不需要给子组件注销事件

## 跨域

### 什么是跨域

1. 出于安全原因，浏览器有同源策略（协议、域名、端口），跨域 ajax 会失败
2. 解决方案： JSONP, CORS, document.domain, postMessage

### JSONP

1. 利用 script 标签没有跨域限制, 指向需要访问的地址，并提供一个回调函数接收数据
2. 但只限于 GET

### CORS

1. 需要前后端同时支持
2. 浏览器默认支持（IE9 需要 XDomainRequest 实现）
3. 关键在于后端，可以通过 Access-Control-Allow-Origin 开启

### document.domain

1. 给页面添加 document.domain， 表示二级域名相同就可以实现跨域
2. 但是不推荐使用该特性，MDN 表示被移出 web 标准了

### postMessage

1. 用于获取嵌入页面的第三方页面数据、窗口间数据通信(html5 的新 api)
2. 一个页面发送消息，另一个判断来源并接受消息

## Event Loop

todo

## 存储

### Cookies

1. 一般由服务器生成， 每次都会携带在 header 中， 可设置过期时间
2. 大小为 4K
3. 安全性： value 加密、http-only 不允许用 js 访问、secure 在 HTTPS 中携带、same-site 不能在跨域请求中携带

### localStorage, sessionStorage, indexDB

1. 一直存在 / 页面关闭就清理 / 一直存在
2. 大小为： 5M / 5M / 不限
3. 不参与服务端通信

### Service Worker

1. 本质上充当了 web app 与浏览器之间的代理服务器
2. 在网络可用时，作为浏览器与网络间的代理
3. 可增加离线体验， 可以用来做缓存文件

## 渲染机制

1. DOM + CSSOM = 渲染树
2. Layout + Paint = display

### 生成 DOM 树

> 字节数据 -> 字符串 -> Token -> Node -> DOM

1. 将字节数据按指定编码转成字符串
2. 将字符串转成 Token: 开始/结束便签，文本
3. 将 Token 转成节点对象(边生成 Token 边转换，可理解为后序遍历)

### 生成 CSSOM 树

> 流程同 DOM

### 组合 render 树

1. 不是简单合并，渲染树只包含可见的节点
2. CSS 匹配 HTML 是消耗性能的，因为要对树进行深度优先的遍历

### 遇到 js 怎么办

1. js 直接阻塞 DOM 构建： GUI 渲染线程与 JS 引擎线程是互斥的
2. CSSOM 间接阻塞 DOM 构建： 因为不完整的 CSSOM 不可用，会阻塞 js 执行（尽管不涉及 js 时是并行的）

### script 的 async, defer

> DOM - deferScript - DOMContentLoaded - load
> asyncScript - load

1. 默认是加载后立即执行
2. defer 是延迟执行： DOM 解析完毕后， DOMContentLoaded 前执行, 不阻塞 DOM 构建
3. async 是异步执行： 与 DOM、DOMContentLoaded 无关，只要加载好了就执行
4. 加载多个 script 时，defer 是有序的， async 是无序的

### Load 与 DOMContentLoaded

1. Load: 页面的 DOM、css、JS、图片 全部加载完毕
2. DOMContentLoaded: 初始的 HTML 被完成加载和解析, 不需要等待 css、JS、图片, 除非是 deferScript

### Layout (布局、回流、重排)

1. (render tree) => 盒模型， 侧重于元素的位置、大小
2. 当页面的布局、几何信息改变，就要回流

> 导致回流的操作
>
> > 浏览器窗口尺寸变化, 增删可见的 DOM, 元素尺寸、内容的变化, 激活 CSS 伪类
>
> 导致回流的属性和方法
>
> > ${client|offset|scroll}${Width|Height|Top|Left}

### Paint (绘制、重绘)

1. 将节点转换为屏幕中的实际像素
2. 元素样式改变但不影响在文档流中的位置， 触发重绘

> 导致重绘的操作
>
> > color, background-color, visibility

### 浏览器对回流重绘的优化机制

1. 浏览器维护一个队列进行批处理，多次操作变成一次
2. 当访问如下属性或方法，浏览器不得不清空队列，以得到精确到值
   > ${client|offset|scroll}${Width|Height|Top|Left}, width, height, getBoundingClientRect(), getComputedStyle()

### 开发者对回流重绘的优化

1. 让元素脱离文档流（隐藏元素 display、使用文档片段 createDocumentFragment、拷贝节点再替换 cloneNode）
2. 避免触发同步布局事件（不要再 for 循环中引起回流）
3. 设置独立图层（video， iframe， absolute|fix）
4. CSS3 GPU 硬件加速（transform， opacity， filters, will-change）
5. 放慢动画速度
