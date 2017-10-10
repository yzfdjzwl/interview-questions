## One

[来自](https://www.nowcoder.com/discuss/33587)

### CSS3动画

[来自](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)

1. transition
```
.box {
    transition: height 1s 1s ease-in; // 属性，持续时间，延时，变化速度
}
```
2. animation
```
.box {
    animation: 2s rainbow; // 动画一个周期持续的时间, 名称
}
@keyframes rainbow {
    0% { background: #c00; }
    50% { background: orange; }
    100% { background: yellowgreen; }
}

// 如果想要无限播放
.box {
    animation: 2s rainbow infinite;
}

// 具体的播放次数
.box {
    animation: 2s rainbow 3;
}
```

### DOM的基本操作

ES5新增的查找API:
```
document.querySelector('.xx');
document.querySelectorAll();
```

### Array相关的函数

[看这里](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
```
push
pop
shift()
unshift()
sort()
reverse()
concat()
slice()
splice()
forEach()
map()
filter()
reduce()
some()
isArray()
indexOf()
lastIndexOf()
join()


includes()
find()
entries()
keys()
values()
fill()
```

### 深拷贝

### 块级元素以及行级元素

1. div, p, ul, li, h1~h6, form, header, footer, aside, section, table
2. a, strong, img, span, label, input, select, em, textarea

### 多行文字垂直居中布局

```
.parent {
    display: table;
}

.child {
    display: table-cell;
}
```

[css](https://css-tricks.com/centering-css-complete-guide/)

### 10~100随机数取10个到数组中从小到大排序

### JavaScript的模块化介绍

### CSS可继承的属性

### 函数式编程

#### 特点

1. 函数是一等公民，即可以独立存活。其他oop语言，函数是依赖于对象的。因此函数可以作为普通变量, 作为参数传入传出。
2. 匿名函数
3. 柯里化: 它用于创建已经设置好了的一个或多个参数的函数。
4. 高阶函数, map, filter, 等
5. 纯函数

### 数组循环的方法

为什么还设计其他方法

### redux原理

#### 为什么使用redux

### 函数节流

1. 让一个函数无法在很短的时间内连续调用，只有当上一次函数执行后过了你规定的时间间隔，才能进行下一次该函数的调用。

### let var const

1. let, const有块级作用域。
2. var存在变量提升。
3. let, const存在暂时性死区。
4. let, const不允许重复声明。
5. const声明的变量，一经初始化就不可改变。不可改变只的是变量所指的那块内存地址不可以改变。

**暂时性死区:** 申明的变量绑定在这个作用域，再也不受外部域的影响, 并且在声明语句之前使用变量会报错。本质: 一旦进入当前作用域之后，所有要使用的变量都一经存在了，但是不能直接使用，需要等到声明变量的那行代码出现，才可以使用变量。

### call appy bind

自己实现一个bind

### 函数柯里化

### setTimeout实现setInterval以及它们之间的区别

[来自](https://stackoverflow.com/questions/729921/settimeout-or-setinterval)

1. 可以用setTimeout实现setInterval。
2. setTimeout是一段时间后开始执行，setInterval是每隔一段时间执行。
3. setInterval比setTimeout更精确一点儿，但是由于JavaScript的单线程机制，所以setTimeout和setInterval两者都是不精确的，如果所做的东西需要很精确，那么要使用setTimeout, 因为这样可以使用setTimeout来控制时间。
4. setTimeout模拟setInterval的时候: waits time + runs the function time + sets another time. setInterval也不是每隔固定的时间后去执行函数，因为JavaScript单线程的机制。

### 设计模式

1. 单列模式

## Two

[来自这里](https://www.nowcoder.com/discuss/35203?type=0&order=0&pos=20&page=1)

### TCP与UDP特点与区别

[参考这里](http://blog.csdn.net/liuyanfeier/article/details/52787037)

|  | TCP | UDP |
|--------|--------|--------|
| 可靠性 | 可靠 | 不可靠 |
| 连接性 | 面向连接 | 无连接 |
| 报文 | 面向字节流(从进程流出和流入进程的都是字节) | 面向报文(保留报文的边界) |
| 效率 | 传输效率低 | 传输效率高 |
| 双工性 | 全双工 | 一对一，多对多，一对多，多对一 |
| 流量控制 | 窗口滑动 | 无 |
| 拥塞控制 | 有(慢开始，拥塞避免，快重传，快回复) | 无 |

### TCP与HTTP的关系

[参考这里](http://www.jianshu.com/p/a5410f895d6b)

* HTTP协议是基础TCP协议的。
* 客户端向服务端发送HTTP请求，首先要与服务端建立TCP连接，即三次握手，握手之后可以进行数据交互。
* HTTP是基于请求响应模式且无状态的协议，1.1之前只支持短连接，即请求一次响应之后连接断开，下次请求需要重新进行TCP连接。而1.1之后是支持长连接的，即进行一次TCP连接后，客户端可以发送多个HTTP请求给服务端。

### HTTPS
### 不知道长度的链表知道一头一尾如何找到中间的位置

* 第一种办法: 先遍历一次，确定长度，再遍历1/2的长度。
* 第二种办法: 快慢指针，快指针到末尾，那么慢指针就到中间了。

### express和koa的区别是什么(ignore)

### generator的实现原理以及如何捕获异常

1. 闭包, 遍历器, 见`makeIterator.js`.
2. 实际上，它就是一个状态机以及返回的是一个遍历器对象。
3. 捕获异常: 使用`Generator.prototype.throw()`
```
// 1. 内部有try catch, 外部有try catch
// 2. 内部有try catch, 外部无try catch
// 3. 内部无try catch, 外部有try catch
// 4. 内部无try catch, 外部无try catch, 报错
```

### 快速排序的原理、时间复杂度以及时间复杂度的推导（分别考虑最坏最好情况）

1. 使用分治法: 分解(递归分解) => 解决 => 合并
2. 最坏的情况: 每次划分将n规模的问题划分为n-1和1, 最终的时间复杂度为O(n * n)
3. 最好的情况，每次划分为2个n / 2的问题，那么最终的时间复杂度为O(n * lgn)

### js中函数作用域链相关（注意作用域链是在函数定义时确定的而不是函数调用时）

### 如何实现一个弹框组件的拖拽，需要触发哪些事件

### 链表种类有哪几种

1. 单链表
2. 循环链表
3. 循环链表

### 进程与线程的区别

[来自这里](https://www.zhihu.com/question/21535820)

1. 进程的概念: 进程是一个具有独立功能的程序，它是系统进行资源分配和调度的独立单位。可以说进程是可以独立运行的程序。
2. 线程的概念: 线程是进程的一个实体，它是CPU调度和分派的基本单位。线程一般不拥有资源，它只是暂用一些寄存器，计数器，栈。

它们的区别:
1. 一个线程只属于一个进程，一个进程拥有多个线程。
2. 资源分配给进程，同一进程的所有线程共享进程的所有资源。
3. 线程作为调度和分派的基本单位，而进程作为分配资源的基本单位。

### HTTPS的加密在哪一层实现

1. 应用层与传输层之间

### IP协议需要知道端口吗

不需要，TCP／UDP协议需要知道端口。

### TCP的可靠传输以及流量控制是如何实现的

三次握手，窗口滑动。

### React的特点

1. VirtualDOM
2. 组件化
3. JSX
4. 单向数据流
5. 灵活，可以和很多库使用，比如： lodash, immutable等

### setTimeout的实现机制（其实就是考察异步编程以及事件循环）

[参考这里](http://blog.codingplayboy.com/2017/04/25/js_async/#JavaScript-3)

### 异步编程的多种办法

[来自这里](http://es6.ruanyifeng.com/#docs/generator-async)

1. 回调
2. 事件监听
3. Promise
4. 发布订阅(观察者模式)
5. Generator: yield命令是异步两个阶段的分界线,Generator函数可以暂停执行和恢复执行，这就是它可以实现异步的原因。

### 先让我讲我所了解的react相关的技术栈，说我讲完他再讲

1. React
2. Redux
3. Babel
4. Webpack
5. ES6
6. React-router
7. React脚手架
8. Flux
9. Mocha
10. CSS Modules

### react父组件如何向子组件传递信息，当父子组件嵌套很深的时候如何处理

[来自这里](http://taobaofed.org/blog/2016/11/17/react-components-communication/)

1. 父传子: props方式，如果嵌套不是很深，比如从第一层到第三层，那么可以在第二层使用`<Xx {...this.props} />`。
2. 子传父
    * 需要父组件向子组件传递props进行通讯，只是父组件传递的, 是作用域为父组件自身的函数。
    * 子组件调用该函数，将子组件需要传递的信息，作为参数，传递到父组件的作用域中。
3. 兄弟间的传递
    * 第一种方法: 子 => 父 => 子
    * 第二种方法: 观察者模式(发布订阅模式)
4. 全局事件(如果父子组件嵌套太深的话)
    * 使用redux, flux
    * 可以使用订阅发布模式
    * 使用context

### 如何优化react性能

1. 避免重复的渲染: shouldComponentUpdate()返回false防止渲染。
2. 避免使用值可能会突变的属性和状态: 使用Object.assign和和`...`扩展运算符, 这样会返回一个新对象，不对更新旧对象。
    * 解决方案: immutalbe
    * 原因: 实现shouldComponentUpdate时，不可突变的数据结构帮助我们轻松的追踪对象变化。这通常可以提供一个不错的性能提升。
3. 列表组件添加key。
4. bind放在consturctor内，避免多次bind。

### 在react生命周期中调用setstate会发生什么

#### 所有的生命周期

```
getDefaultProps()
getInitialState()
componentWillMount()
render()
componentDidMount()

// 当收到Props更新时
componentRecieveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

// 当setState()更新
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

componentDidUnmount()
```

### 讲述redux的原理（建议可以看下源码，不多）

即观察者模式/发布订阅模式

### webpack打包如何配置（单页面以及多页面）

ignore

### 采用nodejs搭建http服务器，前端向该服务器传递的数据类型是什么

ignore

### fetch发送请求发送两次的原因有没有了解过

cors

### jsonp实现原理以及有哪些跨域方式
### koa的了解程度

ignore

## Three

[来自这里](https://www.nowcoder.com/discuss/34736?type=0&order=0&pos=12&page=1)

### tcp http区别
### 如何用两个栈实现一个队列, 如何优化

1. 入队时，将元素压入s1.
2. 出队时，判断s2是否为空，如果不为空，则弹出栈顶元素。如果为空，将s1的元素逐个倒入s2，最后一个元素不倒，直接弹出，出队。

### 知道哪些语言的哪些垃圾处理机制

1. JavaScript
    * 标记清除
    * 引用计数: 0引用的对象会被回收

### node express原理

ignore

### get post

6个不同。

### 如何实现自动登录

[来自](http://www.cnblogs.com/jacksoft/p/5216862.html)

1. 将保存在cookie里面的信息(JSESSIONID)，用随机数和时间戳通过md5进行加密处理形成token。
2. 将uid，token以及过期时间存在cookie里面，同时存在数据库里。
3. 每次访问的时候都要进行匹配。

### 跨域

6种办法

### 弹窗如何实现拖动 不能用h5 drag

1. mousedown
2. mouseup
3. mousemove

```
// 1 添加mousedown事件
       自定义空对象instance
       获取event
       获取target
       instance.moveElement = target
       获取鼠标的坐标event.pageX, event.pageY
       获取元素左上角的坐标 target.offsetLeft, target.offsetTop
       计算偏移量 instance.offSetX = event.pageX - target.offsetLeft;
   2 添加onmousemove事件
       获取当前鼠标坐标
       计算元素移动坐标
       计算最大移动坐标
       设置元素的坐标
   3 添加onmouseup事件
       instance = null;
```

### Promise状态 如何处理异常

1. Promise.prototype.catch(), 它是Promise.prototype.then(null, rejection)的别名;
2. Promise的reject等同于try-catch
3. Promise的异常具有冒泡性质，也就是说错误会被一直传递，直到被捕获为止。
4. Promise如果没有catch方法的话，不会被传递到外层代码，即不会有任何反应。但是Promise内部就会报错了。

### 如果promise里还有一个promise如何处理异常

[看这里](http://www.zcfy.cc/article/promises-all-the-wrong-ways-getiblog-493.html)

```
// 满足需求
cont promiseA = new Promise(function(resolve, reject) {
    firstStep()
    .then(resolve, reject);
});

// 第一种办法，使用try-catch将可能会出现的异常包裹起来
// 自动捕获异常，转为Promise对象。
var p;

try {
  p = Promise.resolve( firstStep() );
}
catch (err) {
  p = Promise.reject( err );
}

p
.then( .. )
..
```

## Four(公共技术)

[来自这里](https://www.nowcoder.com/discuss/4872)

### 闭包的作用和用法

1. 2个函数，内部函数访问了外部函数里的变量，那么称外部函数就是一个闭包。即函数和与其相关的引用环境组合而成的实体。
2. 用处： 设置私有属性，私有作用域, 函数柯里化，事件循环获取当前索引。

### ES6的新特性

类，箭头函数，模板字符串，对象和数组等其他新增的方法，Symbol，const, let, 扩展运算符，Promise, Generator, 模块化, async

### 考察作用域与this

### 实现左定宽右撑满的布局。盒子模型。要使盒子表现与IE一致该如何？

1. 浮动
2. BFC
3. flex

### 事件机制，如何绑定事件处理函数

1. HTML事件处理程序，缺点有：
    * 时差，用户可能在html标签一出现就去触发事件，但是此时事件可能还不具备执行条件。
    * HTML代码和JavaScript代码耦合。
    * 扩充了作用域，但是每个浏览器对这种标准的实现又不一样。
2. DOM0级事件处理程序, 删除事件的方法为: `btn.onclick = null;`
3. DOM2级事件处理程序, `addEventListener, removeEventListener`, 介绍3个参数是干嘛的。优点:
    * 可以添加多个事件处理程序
4. IE事件处理程序: `attachEvent('onclick', callback), detachEvent('onclick', callback)`, IE8及更早的只支持冒泡阶段。
5. `event.target, event.srcElement`

### JavaScript异步方法

1. callback
2. 事件监听
3. Promise
4. Generator
5. Async, Await(异步变为同步)
6. 观察者模式

### 如何获取某个DOM节点，节点遍历方式？

```
document.getElementById('')
document.getElementsByName('')
document.getElementsByTagName('')
document.getElementsByClassName('')
document.querySelector('')
document.querySelectorAll('')
```

### 用LESS如何给某些属性加浏览器前缀？

我没有用过less，但是我想它就是使用定义变量和函数的方式，当作参数传递就可以了。

### js类的继承方式，并实现

6种

### 要实现函数内每隔5秒调用自己这个函数，100次以后停止，怎么办。

easy

## Five(公共技术)

[来自这里](https://www.nowcoder.com/discuss/7437)

### 用原生JS实现一个接口，能够用Ajax上传文件并显示上传进度，上传完成后接收一个来自服务器的json数据

1. [look here](https://segmentfault.com/a/1190000008791342)
2. 红宝书第21章第三节

### 三列布局

6种办法

### 如何防范CSRF（跨站请求伪造）

[来自这里](https://github.com/mylxsw/growing-up/blob/master/doc/%E7%A8%8B%E5%BA%8F%E7%8C%BF%E5%BF%85%E8%AF%BB-%E9%98%B2%E8%8C%83CSRF%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0.md)

1. 检测`referrer`
2. 使用验证码
3. 令牌同步模式: 将token嵌入到表单里面，在服务端对token进行验证。攻击者在请求中无法使用正确的token。
4. 将token写入到cookie里，在发送请求的时候，javascript读取token的值，然后将它放到header里面。


### 请列举减少HTTP请求数和资源文件大小的方法

1. 合并文件。
2. 雪碧图。
3. 图标字体文件(iconfont)。
4. base64: `data:url`
5. 使用缓存


### 列举实现跨域请求的方法

* document.domain + iframe， 只适合跨子域
* 动态创建script标签。
* window.name + iframe
* location.hash + iframe
* postMessage
* jsonp
* CORS

### 浏览器端的JS包含哪几个部分？

* ECMAScript
* 文档对象模型
* 浏览器对象模式

### DOM包含哪些对象？

* Element类型
* Text类型
* Comment类型, 注释
* Attr类型
* DocumentFragment类型

### JS有哪些基本类型？

Number, String, Boolean, null, undefined, Symbol
```
const attr = Symbol();
const other = Symbol.for(string); // 会去访问Symbol注册表里的symbol，调用多次返回的是同一个symbol
```

### 基本类型和引用类型有什么区别？

1. 基本类型值存储的就是简单的数据段，引用类型值是只哪些可能由多个值构成的对象。
2. 基本类型值是按值访问的，引用类型值，是按引用访问的，即按地址访问的。


### 实现一个左边定宽右边自适应的两列布局，要求使用浮动和flex两种方法

```
// 1
.left {
    float: left;
    width: 100px;
}

.right {
    .margin-left: 110px;
}

// 2
.parent {
    display: flex;
}
.left {
    width: 100px;
    margin-rigth: 100px;
}
.right {
    flex: 1;
}
```


### position有哪些属性？各自有什么特点？
### 画一下标准盒模型

这里注意IE盒模型: width包括了padding

### 闭包是什么？有什么用？

1. 2个函数，内部函数访问了外部函数里的变量，那么称外部函数就是一个闭包。即函数和与其相关的引用环境组合而成的实体。
2. 用处： 设置私有属性，私有作用域, 函数柯里化，事件循环获取当前索引。

### ES5中，除了函数，什么能够产生作用域？

全局作用域

### 函数有哪几种调用方式？

1. 普通调用。
2. 对象调用。
3. 作为构造器调用。
4. call, apply


### 描述一下事件模型？IE的事件模型是怎样的？事件代理是什么？事件代理中怎么定位实际事件产生的目标？

1. 三个阶段: 捕获，目标，冒泡


### JS动画有哪些实现方法？

1. setInterval
2. requestAnimationFrame

### 那你知道还有什么实现动画的方法？

1. Transition
2. Animation
3. 相关库: d3, echarts

### 函数声明和函数表达式有什么区别？

1. 函数声明具有变量提升。
2. 函数表达式可以忽略函数名字，创建匿名函数。

### 作用域链是什么？

VO组成了作用域链。

### 面向对象有哪几个特点？

1. 封装
2. 继承
3. 多态

### JS怎么实现继承？

6种方式，创建对象的方式有7种。

### 怎么判断属性来自对象自身还是原型链？

hasOwnProperty()

### 双向链表怎么找中点？

头尾指针都往中间走，两个指针相等或交替的时候为中点

### 单向链表呢？

快慢指针。

### 怎么实现跨域请求？
### 解释下TCP三次握手

### HTTP头中哪些是和缓存相关的？

1. pragma: no-cache
2. Expires, 它的值是一个格林尼治时间，表示过期时间，pragma的优先级高于Expires, 但是它的时间是相对于服务器的，如果本地时间有问题，那么就没有多大的用处。
3. cache-control
4. 缓存校验字段: Last-Modified, ETag。Last-Modified只是定义的时间，但是如果一个资源被修改了, 但是实际内容并没有被修改，那么这样，还是会浪费的，因此有了ETag，比如md5编码。


### cookie和session有什么区别？

[参考](https://www.zhihu.com/question/19786827)

1. cookie在客户端，session在服务端。
2. 单个cookie的大小一般不超过4kb，并且很多浏览器会限制一个站点的cookie最多20个。
3. cookie相对于session来讲，不是很安全。
4. 默认下，每一次回话，生成的SESSIONID会存在cookie里面，这样来保持会话；如果禁用cookie的话，有一种技术叫做url重写，会在url里面带上sid。
5. session一般用来跟踪用户状态，cookie一般用来存储基本信息。

### 浏览器在发送cookie时会发送哪几个部分？

1. name, value

### 那你知道cookie有哪几个组成部分吗？

1. name, value
2. domain
3. path
4. expires/Max-Age
5. Size
6. Secure
7. HTTP

## 总结

1. get, post
2. cookie, session
3. 跨域
4. 网络安全
5. 缓存
6. tcp三次握手, 四次挥手
7. 继承
8. 作用域链
9. 模块化的写法
10. JavaScript异步的多种方式
11. node的一些模块(最弱)
12. 原型链
13. node与java的对比(弱)
14. sql与nosql的对比(弱)
15. UDP, TCP区别
16. TCP与HTTP区别
17. CSS3与HTML5新特性
18. 闭包以及其适用场景。
19. 块级元素，内联元素。
20. CSS中可继承的属性。

## Node

1. Buffer模块是干什么的。
    * Buffer模块可以存储原始数据，例如: acsii, utf8, base64
    * Buffer.isEncoding()
    * Buffer.isBuffer()
2. Stream是什么，使用的两种模式。
    * Stream实际上是一个接口, 有点儿类似于Linux中的管道符，可以将上一个程序的输出作为下一个程序的输入，其他模块很多都实现了Stream这个接口。
    * 一般有三种: 可读流，可写流，可读+可写
    * 对于可读流，有两种使用模式:
        * flowing: 在该模式下，会尽快获取数据向外输出。因此如果没有事件监听，也没有pipe()来引导数据流向，数据可能会丢失。
        * paused: 默认模式。在该模式下，需要手动调用stream.read()来获取数据。
3. http模块如何将异步处理实现为成同步处理方式。
    * 使用net模块
   * [方法](http://blog.csdn.net/wanglei20116527/article/details/62892070)

## Node Real Remember

1. HTML5新特性
    * 语意化标签
    * 本地储存，localStorage, sessionStorage
    * 连通性, websockets
    * 媒体标签: video, audio
2. CSS3新特性
    * 增加了许多选择器: 如nth-child
    * 圆角，背景，渐变，阴影
    * 动画
3. CSS中可继承的属性: [Look Here](http://www.cnblogs.com/thislbq/p/5882105.html)
    * 所有元素可以继承的属性: visibility, cursor
    * 块级元素可以继承的属性: text-align, text-indent
    * 内联元素可以继承的属性: 字体系列属性, 除text-align, text-indent以外的文本系列属性。
        * 即line-height, word-spacing, letter-spacing, color, transform
4. 块级元素，行级元素
    * div, p, ul, li, h1~h6, form, header, footer, aside, section, table
    * a, strong, img, span, label, input, select, em, code, textarea
5. 函数式编程的特点
    * 函数是一等公民，即可以独立存活。其他oop语言，函数是依赖于对象的。因此函数可以作为普通变量, 作为参数传入传出。
    * 匿名函数
    * 柯里化
    * 高阶函数, map, filter, 等
6. setInterval, setTimeout的参数问题: 第一个参数是回调函数，第二个参数是时间，后面的参数默认传递到回调函数里面。
7. 观察者模式表达: 建立一种对象与对象之间的依赖关系，一个对象发生改变时将自动通知其他对象，其他对象将相应做出反应。在此，发生改变的对象称为观察目标，而被通知的对象称为观察者，一个观察目标可以对应多个观察者，而且这些观察者之间没有相互联系，可以根据需要增加和删除观察者，使得系统更易于扩展，这就是观察者模式的模式动机。
8. TCP与UDP的区别
9. CSS3的position的新值: sticky, 它是relative和fixed的组合体，然后可以设置`top, left, bottom, right`为阀值, 超过阀值以relative表现，小于阀值以fixed表现。
10. 所有属性都有的值: `initial, unset, inherit`
    * initial, 表示元素属性的初始默认值
    * inherit, 表示元素的直接父元素对应属性的计算值
    * unset, 表示如果该属性默认可继承，则值为inherit；否则值为initial。实际上，设置unset相当于不设置
11. 线程与进程的三个特点:
    1. 一个线程只属于一个进程，一个进程拥有多个线程。
    2. 线程作为调度和分派的基本单位，而进程作为分配资源的基本单位。
    3. 资源分配给进程，同一进程的所有线程共享进程的所有资源。线程一般不拥有资源，它只是暂用一些寄存器，计数器，栈。
12. react的五个特点:
    1. JSX
    2. VirtualDOM
    3. 组件化
    4. 单向数据流
    5. 灵活性，可以和很多库结合使用。
13. react性能优化的三个办法:
    1. shouldComponentUpdate
        * 会进行比较，不要直接修改旧对象，而是使用Object.assign()和扩展运算符(`...`)来返回一个新对象进行比较。
        * immutable库，但是没有了解过。
    2. 列表组件优化，添加key，这里涉及到VirtualDOM
    3. bind放在consturctor内，避免多次bind。
14. redux原理
15. get post的区别
    1. HTTP规范指出，get一般用于获取数据，post一般用于向服务端提供要处理的数据。
    2. get传输的数据有限制，2048个字符，不通浏览器的限制不一样，而post没有限制。
    3. get可以被缓存，可以被添加到书签里，而post不能缓存。
    4. get的数据在url中显示出来，而post不会在url中展示。
    5. post的安全性更高，因为参数不会被保存在浏览器以及的服务器的日志中。
    6. 编码类型不一样，get只有urlencoded编码，post有urlencoded编码以及form-data编码。
16. 闭包的运用场景: 私有变量，私有作用域，函数柯里化，函数式编程，事件循环获取当前索引
17. 什么是闭包: 闭包由执行环境A以及其内部的函数B构成，当函数B的执行环境里引用了执行环境A的变量，那么就构成了闭包。
18. 减少HTTP请求的次数
    1. 文件压缩与合并。
    2. 雪碧图
    3. iconfont
    4. base64
    5. 使用缓存
19. 继承和对象创建的多种方式实现
    记不住的继承的两种: 寄生式继承，即在新的函数里进行封装，假装自己是扩充了的。寄生式组合继承，由于组合式继承会有两次对属性的操作，需要在寄生式函数里重新封装，而封装为对prototype的扩展，这样就只有一次了。
20. TCP三次握手与四次挥手
    1. 三次握手
        * A => B, SYN = 1, seq = x
        * B => A, SYN = 1, ack = x + 1, seq = y
        * A = > B, seq = x + 1, ack = y + 1(表示希望接受序列号为y+1的包)
    2. 四次挥手: 由于TCP连接是全双工的，因此需要四次挥手。
21. cookie与session的区别
    1. cookie存于客户端，session存在服务端。
    2. cookie相对于session而言，不是很安全。
    3. cookie的大小有限制，一般浏览器限制为4M，并且一般浏览器对同一域的cookie做了个数的限制，一般为20个。
    4. 默认下，cookie里会存JSESSIONID，用来保持会话，如果被禁用了，有一种技术叫做URL重写。
22. cookie的组成部分
    * name, value
    * domain
    * security
    * Size
    * Path
    * Expires/Max-Age
    * HTTP
23. HTTP2的新特性
    1. 二进制协议，即可以传输二进制数据了
    2. 多路复用，一个TCP连接，可以请求多个资源(多个HTTP请求)。
    3. Server Push
    4. 对header进行HPACK压缩传输。
24. 设计模式: 观察者模式，单列模式，工厂模式, 装饰者模式(为对象添加方法或功能)，
25. 创建对象的方式:
    1. 对象字面量。
    2. 工厂模式。
    3. 函数构造模式。
    4. 原型模式。
    5. 组合模式。
    6. 动态原型模式。
    7. 寄生构造函数模式，使用new关键字。
    8. 稳妥构造函数模式，不能用new和this。

26. react diff算法的关键
    1. 相同类型的元素将会产生相同类型的树。
    2. 对于同一组子元素，可以设置key值来唯一区分。
    3. 对于相同类型元素
    4. 对于不同类型的元素
    5. 对于同一组子元素


### 关于Node与java对比的总结

* Node是解释性语言并且是动态语言，而Java是翻译性语言并且是静态语言，也就是说，Node的容错率比较低。
* Node是基事件驱动，异步编程，非阻塞式IO，而Java是基于多线程编程。
* Node轻量高效，并且很好的支持Restful风格，适合中小型项目开发，而Java相对Node更适合大型项目开发。
* Node的包很多，但是参差不齐，而Java的很多包都是经过考验的。

### 关于Nosql与Sql的对比的总结

* nosql是非关系型的，sql是关系型的。
* nosql可能有多种存储结构，比如(redis, graph, mongodb), 而sql是表结构。
* nosql比较灵活，动态的schema, 而sql是严格的schema, 因此nosql扩展性比较强，不需要每条数据的格式都是一样的。
* 读写效率比较高，因为相关的数据都在一起，不需要花太多的时间去定位磁头。
* mongodb的内存映射机制，数据不是存储在硬盘里的，而是映射到内存里的，因此提升了IO效率。(no say this)

### 观察者模式
