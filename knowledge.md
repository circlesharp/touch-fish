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

``` js
function myInstanceOf(left, right) {
  let proto = left.__proto__;
  while(proto) {
    if (proto === right.prototype) return true;
    proto = proto.__proto__;
  }
  return false;
}
```

## 继承
1. 要体现 super
2. 原型的 _proto_ 要指向被继承的构造函数的原型
3. 原型的 constructor 要指向本构造函数

``` js
function Person(name) {
  if (!(this instanceof Person)) throw Error('error');
  this.name = name;
}
Person.prototype.sayHi = function() {console.log('I am:', this.name);}

function Student(name, grade) {
  // super
  Person.call(this, name);
  this.grade = grade;
}
// 修改原型, 拷贝过的原型的 __proto__ 是这个 Person.prototype
Student.prototype = Object.create(Person.prototype);
// 修改原型链 - constructor
Student.prototype.constructor = Student;
Student.prototype.getGrade = function() {console.log('I am in grade:', this.grade);}
```

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

## EventLoop

### 什么是 task, job

1. 宏任务 task 宿主(浏览器、Node)发起的
   > setTimeout, setInterval, MessageChannel, I/O, setImmediate, script(整体代码块)
2. 微任务 job JS 自身发起的
   > requestAnimationFrame, MutationObserver, Promise, process.nextTick, queueMicroTask

### 什么是 EventLoop

1. 执行一个宏任务， 清空微任务队列
2. 新创建的微任务会立即进入队列，不需要等下一次循环
3. V8 对 promise 有优化， 连续的多个 then(3 个)如果没有 reject 或者 resolve 会交替执行 then 而不至于让一个堵太久完成用户无响应

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

## HTTP 缓存

### 缓存的分类

1. 私有缓存(浏览器缓存): 只能用于单独用户，用于减少多余请求与更好离线体验
2. 共享缓存(代理缓存)： 可以被多个用户使用，用于缓存热门资源减少拥堵与延迟，（可由 ISP，公司，service worker 提供）

### 缓存操作的目标：

1. 200 的 GET 请求
2. 永久重定向（301），错误响应（404），不完全的响应（206）
3. 除 GET 外的定义了 cache 键名的响应

### 缓存控制

1. Cache-Control， HTTP/1.1:
   > no-store 没有缓存
   > no-cache 缓存但重新验证(若未过期返回 304)
   > private / public 默认私有
   > max-age=seconds 保持新鲜的最大时间
   > must-revalidate 校验
2. Pragma, HTTP/1.0
   > 相当于 Cache-Control： no-cache
   > 但响应头没有明确定义此属性，不能替代 no-cache
3. Expire, HTTP/1.0
   > 失效的日期
   > 缺点是受限于本地时间

### 新鲜度与缓存验证

1. 缓存驱逐： 因为空间有限
2. 陈旧的不会直接删除，而是缓存验证（即 协商缓存）
   > IF-None-Match: ETag 优先级较高，强校验，不透明
   > If-Modified-Since: Last-Modified 时间会因本地修改而改变，弱校验，透明

### 改进资源 (revving 技术)

1. 适用于 长期不变动，变动需要尽快更新 的资源，如 js, css
2. 做法： 使用命名区分，加上版本号，过期时间设置得尽可能长
   > 能消除部分资源更新先后引起的不一致
   > 引用的地方需要更新链接，可以通过构建工具解决，如 webpack

### 合适的缓存策略

1. 不需要的设置 no-store
2. 频繁变动的设置采用校验
3. 代码文件可尽可能设置长，并采用 revving 技术

## 预 xx 懒 xx

1. 预加载 rel=preload 强制浏览器请求资源
2. 预渲染 rel=prerender 预先在后台渲染
3. 懒执行 某些逻辑在使用的时候再执行
4. 懒加载 不关键的资源延后加载

# Vue

## 对 SPA 的理解

1. 单页应用，仅在页面初始化的时候加载对应的资源，使用路由机制实现视图变化避免页面重新加载
2. 用户体验好，能避免不必要的跳转、重复渲染
3. 对服务器压力小
4. 初次加载耗时长
5. 不利于 SEO

## v-show 与 v-if

1. v-if 是条件渲染，会销毁与重建组件，也是惰性的
2. v-show 是采用了 display 属性，组件会初始化，但频繁切换开销少

## Class 与 Style 动态绑定

1. 都有对象语法和数组语法
2. class 的对象语法值是 boolean, style 的对象语法值是 css 属性值
3. class 的数组语法值是 className, style 的数组语法值是 css 属性键值对

## 单向数据流

1. 父子通过 props 行程单向下行绑定
2. 子不能修改 props, 只能通过 $emit 派发事件
3. 可以将 props 作为 data 的初始值
4. 可以定义一个依赖 props 的计算属性

## computed 和 watch

1. 计算属性可依赖多个属性值，有缓存
2. watch 是监听回调，允许异步操作，允许中间态

## 如何给数组项赋值

1. 使用 Vue.set / vm.$set
2. 使用 Array.prototype.splice

## 生命周期

1. beforeCreate: 实例被创建之初，属性生效之前
2. created: 实例已创建，属性已绑定
3. beforeMount: render 首次被调用
4. mounted: el 被 vm.$el 替代，挂载到实例上
5. beforeUpdate: 组件数据更新(virtual DOM re-render and patch)前
6. update: 组件数据更新之后
7. activated: keep-alive 专属，组件被激活时调用
8. deactivated: keep-alive 专属，组件失活时调用
9. beforeDestroy: 组件销毁前调用
10. destroyed: 组件销毁后调用

## 父子组件的生命周期

1. 加载时, 关键是 beforeMount 调用 render
   > 父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
2. 销毁时
   > 父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## 在哪个生命周期内调用异步请求

1. created, beforeMount, mounted 都可以，因为实例属性已生效
2. 推荐 created, 因为时间更快；且 SSR 不支持 beforeMount, mounted

## 父组件监听子组件的生命周期

1. 做法一： 子组件在钩子上派发事件
2. 做法二： 父组件监听 @hook:钩子名

## keep-alive

1. 是组件，一个抽象组件，不会渲染 DOM，也不会出现在组件的父组件链中
2. 用于包裹动态组件，缓存失活的组件实例而非销毁
3. 支持 include, exclude, max 有条件缓存

## data 为什么是一个函数

1. 组件是用于复用的，但对象是一个引用，相当于作用域没有隔离
2. 能维护一份被返回的独立的拷贝，不相互干扰
3. Vue 是一个单例，不需要是函数

## v-model 原理

1. 语法糖
   > text, textarea => :value @input
   > checkbox, radio => :checked @change
   > select => :value @change
2. 可自定义
   > :value, @input

## Vue 组件间通信

0. 组件间由 3 类： 父子、隔代、兄弟
1. props / $emit 适用于父子
2. ref, $parent / $children 适用于父子
3. EventBus($emit / $on) 以空 Vue 实例作为中央事件总线，适用任何组件间通信
4. VueX 核心是 store, 用于存储 state, 是响应式的，改变 state 的方法是显式地 commit， 适用任何组件间通信
5. provide / inject 主动提供与依赖注入， 适用于隔代
6. $attrs / $listeners

## 详解 VueX

1. 是状态管理，核心是 store, 装的是 state
2. 是响应式的
3. 改变状态需要显式地 commit mutation
4. 具有 5 个核心模块:
   > 1. State: 单一状态树，应用的状态与初始化
   > 2. Getter: 获取数据
   >    > -- `vm.$store.state.xxx`
   >    > -- `computed: ...mapGetters([xxx, xxx])`
   > 3. Mutation: 唯一的变更状态的方法(mutate State)，同步的
   >    > -- `vm.$store.commit(xxx)`
   >    > -- `methods: ...mapMutations([xxx] / {alias: xxx})`
   > 4. Action: 用于提交 mutation (commit mutation), 支持异步
   >    > -- `vm.$store.dispatch(xxx)`
   >    > -- `methods: ...mapActions(同 mapMutations)`
   > 5. Module: 用于拆分单个 Store

## vue-router 路由模式

1. hash: URL hash 值作为路由
2. history: 依赖 HTML5 History api 和服务器配置
3. abstract: 支持所有 js 的运行环境，包括 Node.js

## hash 模式

1. 基于 location.hash 实现： a:href 或者 对 location.hash 赋值
2. hash 是客户端的一种状态，不会发请求
3. hash 值改变能在改变访问历史
4. 通过 hashchange 事件监听

## history 模式

1. 基于 history.pushState, history.replaceState 实现
2. 不刷新页面下操作访问历史
3. 需要手动触发 popstate

## MVVM

1. View 页面
2. Model 数据 (api)
3. ViewModel 我们写的组件

## 数据双向绑定

0. 含义： View --event--> Date, Date --bind--> View
1. 监听器 Observer 对数据对象递归遍历， Object.defineProperty 数据劫持
2. 解析器 Compile 解析模板，对有数据绑定的节点绑定更新函数，添加订阅；
3. 订阅者 Watcher 订阅 Observer 并触发 Compile 的更新函数
4. 订阅器 Dep 采用发布订阅模式，收集 Watcher

## 怎么监听对象和数组

1. defineProperty 只能对属性进行劫持， 而非整个对象
2. 递归，对树遍历

## 如何新增属性

1. 使用 Vue.set / vm.$set
2. 如果是数组，泽使用 splice 方法
3. 如果是对象，判断属性是否存在，是否响应式，再调用 defineReactive(即 数据劫持)

## 虚拟 DOM

保证了性能的下限、无需手动操作 DOM(双向绑定的基础)、跨平台

1. 是用 JS 对象模拟真实 DOM
2. diff 算法比较差异
   > 节点替换， 顺序替换， 属性更改， 文本改变
3. patch 算法打补丁到真实 DOM
   > 因为会复用（如文本改变），所以会需要唯一标记 key

# 修言老师专题

## 闭包专题

### 简述闭包

1. 引用了自由变量的函数就是就是闭包
2. 得益于词法作用域，在函数上下文被销毁后仍能范围内部的变量，才能实现闭包
3. 闭包的应用：节流防抖、模拟私有变量、偏函数与柯里化
4. 闭包有可能导致内存泄露：即使已从调用栈弹出，但垃圾回收算法仍可抵达，需解除引用

### 编译阶段与运行阶段

1. js 具有编译阶段、运行阶段。
2. 在编译阶段，看到重复的变量声明会忽略；在运行阶段，找不到当前作用域有变量声明则“探头”。
3. “探头”就是沿作用域链找

### 作用域分类

1. 全局作用域
2. 函数作用域
3. 块作用域（局部作用域）

### 执行上下文分类

1. 全局上下文
2. 函数上下文
3. eval 上下文

### 执行上下文与作用域

1. 执行上下文就是调用栈，作用域就是当前所处的执行上下文
2. 调用栈与作用域链不是同一回事，如果沿作用域链寻找变量就是动态作用域，而 JS 是词法作用域与调用栈无关

### 暂时性死区

1. 原因是 let, const 不存在变量提升
2. 不会沿作用域链找本作用域声明的变量

### 词法作用域 与 动态作用域

1. 词法/静态作用域 在定义时确定 沿着位置去找
2. 动态作用域 在运行时确定 沿着函数调用栈找

### JS 的内存管理机制

1. 分为栈内存与堆内存
2. 栈内存存放基本类型的值与引用类型的地址
3. 堆内存存放引用类型的值
4. 使用标记清除算法，即判断是否可抵达

## this

0. this 是一个变量，是普通函数的一个变量
1. 普通函数的 this 跟挂载到的对象有关: this 指向它所在方法的那个对象
2. 箭头函数的 this 跟定义位置有关: 词法作用域
3. IIFE, setTimeout, setInterval 如果用普通函数，this 都是 global

## HTTP

### HTTP 状态码

1. 1xx 请求成功，处理过程没结束，客户端需要再发一个请求
2. 2xx 请求成功，处理完毕
3. 3xx 请求成功，处理完毕，但客户端还需要继续处理(301 永久，302 临时，304 缓存)
4. 4xx 客户端错误 (400 报文语法错误， 403 拒绝/无权限, 404 资源不存在)
5. 5xx 服务端错误 (500 内部错误， 502 网关错误， 504 网关超时)

### HTTP 无状态

1. 两个请求之间是相互独立
2. cookie session

### HTTP 版本

1. HTTP 0.9： 只能 GET；
2. HTTP 1.0： 增加多种请求 METHOD；TCP 连接不能复用；请求队头阻塞问题
3. HTTP 1.1： 长链接；请求管线化，响应队头阻塞问题
4. HTTP 2.0： 二进制分帧；头部压缩；服务端推送；多路复用

### HTTPS

1. 内容加密 混合加密
2. 身份认证 CA
3. 保护数据完整性 数字摘要

### nowCode

```js v8
function solution() {}
const line = readline();
console.log(solution(line));
```

# 引用类型 - 红宝书
引用类型的值（对象）是引用类型的一个实例。在ES中，引用类型是一种数据结构，用于将数据和功能组织在一起。（它也常被称为类，或被称为对象定义）。

## 1 Object
`new Object();` 或 `{}`

## 2 Array

### 检测方法
1. `xx instanceof Array`，缺点是如果存在多个全局执行环境，可能报错
2. `Array.isArray` 推荐

### 转换方法
1. toString: 调用每个元素的 toString 方法，并通过逗号拼接
2. toLocaleString: 调用每个元素的 toLocaleString 方法，并通过逗号拼接
3. valueOf: 返回数组自身

### 重排序方法
1. reverse: 反转
2. sort(): 比较每一个调用 toString 的值
3. sort(cb)

## 3 Date
UTC: Coordinated Universal Time 国际协调时间
GMT: Greenwich Mean Time 格林尼治标准时间

GMT = UTC + 0

### 如何创建日期对象
1. 传入该日期的毫秒数
2. Date.parse()：接受一个表示日期的字符串参数
3. Date.UTC()：接受 年、月、日、时、分、秒

### Date 的继承方法
1. toString, toLocaleString: 返回字符串，但是不同浏览器差异较大
2. valueOf: 时间戳

## 4 RegExp

### RegExp 的实例属性
1. global
2. ignoreCase
3. multiline
4. source
5. lastIndex

### RegExp 的实例方法
1. regExp.exec(string)：专为捕获组设计，返回第一个匹配项信息的数组，数组含 index, input 属性
2. regExp.test(string)：返回布尔值

## 5 Function
函数是对象，函数名是指针
`var sum = new Function('num1', 'num2', 'return num1 + num2;')`

### 函数声明与函数表达式
1. 函数声明：`function a() {}`
2. 函数表达式：`var a = function() {}`
3. 函数声明提升：能实现“先调用后声明”

### 函数内部属性
1. arguments：是一个类数组对象
   1. arguments.callee 属性指向拥有这个 arguments 的函数
   2. arguments.caller 属性指向调用当前函数的函数
2. this: 引用的是函数执行的环境对象

### 函数的属性
1. length: 希望接收的命名参数的个数
2. prototype: 是保存所有实例方法的真正所在

### 函数的方法
1. call
2. apply
3. bind

## 6 基本包装类型
对于 Boolean, Number, String：每当读取到一个基本类型的时候，后台会创建一个对应的基本包装类型的对象

``` js
// 1 创建 String 类型的一个实例
// 2 在实例上调用指定的方法
// 3 销毁这个实例

// == origin ==
var s1 = 'str'
var s2 = s1.substring(2)

// == new ==
var s1 = new String('str')
var s2 = s1.substring(2)
s1 = null
```

### 基本包装类型与引用类型的差别
体现在对象的生存期上：
1. 引用类型一直保存在内存中
2. 自动创建的包装类型的对象，则只存在于一代码的执行瞬间，然后立即销毁

### Number 类型
1. valueOf: 返回基本类型的数值
2. toString(基数): 进制转换 p.s. 不同于 Number.parseInt(str, base) 转为十进制
3. toFixed(n): 指定小数位
4. toExponential(n): 指数表示法(e表示法)
5. toPrecision(位数): 视情况

### String 类型
1. 字符方法：
   1. charAt(n): 相对于 str[n]
   2. charCodeAt(n): 获取 str[n] 的 ascii 编码
2. 字符串操作方法：
   1. concat(...strs): str + ...
   2. slice(startIdx, endIdx), substring(startIdx, endIdx): 负数下表现不一致
   4. substr(startIdx, n): 子串长度为n
3. 字符串位置方法
   1. indexOf
   2. lastIndexOf
4. trim 删除前置和后缀的空格
5. 大小写转换方法
   1. toUpperCase, toLocaleUpperCase
   2. toLowerCase, toLocaleLowerCase
6. 模式匹配方法
   1. String.prototype.match: 相当于 RegExp.prototype.exec
   2. String.prototype.search: 返回的是索引
   3. String.prototype.replace(String | RegExp, String | Function)
   4. String.prototype.split(String | RegExp [, n]): 第二个参数限定数组长度
7. String.fromCharCode: 一个或多个字符编码转字符串

## 7 单体内置对象

### global
1. encodeURI, encodeURIComponent: 用特殊的 utf-8 字符对无效字符编码
2. …… 略

# 面向对象的程序设计 - 红宝书
对象的定义: 无序属性的集合 (ES 没有类的概念)

## 1 理解对象

### 特征值
特征值用于描述属性 (property) 的各种特征, 可分为数据属性&访问器属性.  
数据属性包含一个数据值的位置, 可以读取和写入  
访问器属性不包含数据值, 包含一对 getter, setter 

通过 defineProperty 或 defineProperties 定义  
通过 getOwnPropertyDescriptor 获取给定属性的描述符

1. 数据属性: `[[Configurable]], [[Enumerable]], [[Writable]], [[Value]]`
   1. configurable: 能否通过 delete 删除, 能否修改属性的特性, 能否把属性修改为访问器属性
   2. enumerable: 能否通过 for-in 循环
   3. writable: 能否修改属性的值
   4. value: 这个属性的数据值
2. 访问器属性: `[[Configurable]], [[Enumerable]], [[Get]], [[Set]]`
   1. get: 在读取属性时调用
   2. set: 在写入属性时调用

## 2 创建对象

### 1 工厂模式
没有解决对象的识别问题, 不能判断类型  

``` js
function createPerson(name, age, job) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  }

  return o;
}
```

### 2 构造函数模式
可以将构造函数的示例标识为一种特定的类型; 但是每个方法都要在每个示例上重新创建一遍  

```js
function Person(name, age, job) {
   this.name = name;
   this.age = age;
   this.job = job;
   this.sayName = function() {
   console.log(this.name);
   }
}
```

### 3 原型模式

#### 理解原型对象
1. 只要创建了函数, 该函数就会有一个 prototype 属性, 这个属性指向它的原型对象
2. 这个原型对象也会有一个 constructor 属性, 指向这个函数
3. 这个原型对象仅有一个属性, 其他属性是继承 Object 的
4. 这个函数的实例有 `[[Prototype]]` 指针指向原型对象, 实现为 `__proto__`
5. 注意: 构造函数和实例之间没有直接关系, 需要通过原型对象
6. isPrototypeOf: `Constructor.prototype.isPrototypeOf(instance) => Boolean`, (会沿着原型链回溯的)
7. getPrototypeOf: `Object.getPrototypeOf(instance) => Constructor.prototype`
8. hasOwnProperty: `Object.prototype.hasOwnProperty(string) => Boolean`, 用于判断实例属性或原型属性

#### 原型与 in 操作符
有 2 种方式使用 in 操作符: `for-in, in`

1. 在单独使用时, 无论属性在实例中还是在原型中
2. 在 for-in 中, 无论属性在实例中还是在原型中, 但必须是可枚举
3. 如果要获取实例上的所有属性, 用 `Object.getOwnPropertyNames`
4. 如果要获取 for-in 的效果, 获取可枚举的属性的数组, 用 `Object.keys`
5. 如果要重写原型对象的 constructor 属性, 要设置不可枚举

#### 原型模式的缺点
1. 构造函数不能传参, 所有实例在默认下都取得相同的值
2. 共享: 对与函数非常合适, 但是对属性, 特别是值是引用类型的属性, 问题很大

### 4 组合使用构造函数模式和原型模式
每个实例都有自己的一份实例属性的副本, 同时又共享着对方法的引用;  
还支持向构造函数传递参数  

``` js
function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype = {
   constructor: Person,
   sayName() {
   console.log(this.name);
   }
}
```

### 5 动态原型模式
1. 把所有信息都封装在构造函数中, 包括原型的初始化
2. 同时保持了构造函数和原型的优点

``` js
function Person(name, age) {
   this.name = name;
   this.age = age;

   if (typeof this.sayName !== 'function') {
      Person.prototype.sayName = function() {
         console.log(this.name);
      };
   }
}
```

### 6 寄生构造函数模式
1. 很像工厂模式, 封装了创建对象的代码, 并返回
2. 但是用 new, 所以成了构造函数
3. 缺点: 返回的对象与构造函数的原型对象没有联系

``` js
function Person(name, age, job) {
   const o = new Object();
   o.name = name;
   o.age = age;
   o.job = job;
   o.sayName = function() {
      console.log(this.name);
   }

   return o;
}

new Person();
```

### 7 稳妥构造函数模式
1. 没有公共属性
2. 其方法也不引用 this
3. 不用 new, 闭包的原理
4. 缺点: 返回的对象与构造函数的原型对象没有联系

``` js
function Person(name) {
   const obj = new Object();

   // 受保护的属性在此定义

   obj.getName = function() {
      return name;
   }

   return obj;
}

const person = Person();
```
