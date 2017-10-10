## react部分

### 为什么要使用redux

1. react主要是一个view框架，虽然配合state, props也可以组件与组件之前通信, 但是一旦当组件的数量比较大，结构比较复杂的情况下，多个组件之前共享数据比较多的情况， 多个组件需要进行通信的时候，单纯的使用react, props就不是特别理想了。

2. 流程:
    * actions里，dispatch到store(包含所有state)里。
    * store将会根据type的类型执行函数(prevState, action.type),这个函数就是reducer。
    * store更新reducer, state改变后界面就会更新。

### context与props

#### why not to use context

1. 它只是个实验性的api。
2. 不熟悉redux, mobx, 别使用context。
3. If you aren't an experienced React developer, don't use context.

#### 如何使用

1. the context provider设置childContextTypes以及getChildContext()
2. React自动传递信息到子树里的任意一个组件，但是子树里要接受context的组件需要定义`contextTypes`
3. `this.context.color`就可以使用了, 如果`contextTypes`未定义，context将会是一个空对象。

添加context后生命周期里也会有它的:

1. constructor(props, context)
2. componentWillUpdate(nextProps, nextContext)
3. shouldComponentUpdate(nextProps, nextState, nextContext)
4. componentWillUpdate(nextProps, nextState, nextContext)
5. componentDidUpdate(prevProps, prevState, prevContext)

#### Updating Context

1. 谁在`getChildContext()`里的变量由props或者state控制，那么props或者state更改后，context就会改变。
2. 但是不要更新Context，因为如果更新后，树的中间有的组件`shouldComponentUpdate`返回的是false之后，后面的组件根本就不会更新了。

### react diff

[官方文档react diff](https://facebook.github.io/react/docs/reconciliation.html)

#### 基于

1. 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构
2. 对于同一层次的一组子节点，它们可以通过唯一的id进行区分

多种情况:

1. 不同类型的节点。(逐层比较，发现不同的节点，后面的全部删除)
2. 相同类型的节点，但是属性不一样。(只会更新不一样的地方)
3. 列表节点的比较，添加key。(使用key来匹配，就可以高效。), 可以看到，对于列表节点提供唯一的key属性可以帮助React定位到正确的节点进行比较，从而大幅减少DOM操作次数，提高了性能。

#### setState

1. `shouldComponentUpdate`
2. `componentWillUpdate`
3. `render`
4. `componentDidUpdate`

#### 生命周期

1. getDefaultProps()
2. getInitialState()
3. componentWillMount()
4. render()
5. componentDidMount()
6. componentWillRecieveProps()
7. shouldComponentUpdate()
8. componentWillUpdate()
9. componentDidUpdate()
10. componentDidUnmout()


## 项目难点

1. react-router踩坑介绍。
2. crm插入数据坑。(promise, promise.all, for循环全部, 单独定义变量)
3. crm性能优化。
4. crm权限部分。

你现在做的这个项目你觉得你写的东西最大的优点和缺点

## ES6中的箭头函数可以用作构造函数吗

1. `this`指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外部代码库的this。正事因为它没有this，所以也就不能用作构造函数。
2. 除了this, 以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量: arguments, super, new.target.
3. 由于箭头函数没有自己的this，因此也不能使用call(), apply(), bind()这些方法来改变this的指向。

## 那些操作会有跨域的限制？为什么要有跨域的限制？没有跨域的限制会怎么样？

1. 访问端口号或域名或协议不同的url，就形成了跨域。
2. 如果没有跨域的限制，会存在CSRF(跨站脚本请求伪造)漏洞。
3. 防止CSRF攻击的方法:
    * 验证码
    * referrer check
    * token, 由于攻击者不能获得cookie(理论上), 因此发送请求的时候(post/get)带上token(其实就是伪随机数)。
4. 跨域解决的方法:
    * `document.domain+iframe`
    * `location.hash+iframe`
    * `window.name+iframe`
    * `jsonp`
    * `cors`
    * `postMessage`
    * `websocket`

## 使用react-router的项目即使切换了页面，URL发生了改变，但是页面也不会刷新，这是如何实现的？

## position的几种取值？

1. static
2. relative
3. absolute
4. fixed
5. stikey

## 快速排序

即找基准元素的那个算法, 时间复杂度: nlogn。

```
function quickSort(arr) {
    if (arr.length < 1) {
        return arr;
    }
    let middleIndex = Math.floor(arr.length - 1);
    let middle = arr.splice(middleIndex, 1)[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (middle > arr[i]) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return quickSort(leftArr).concat([middle], quickSort(rightArr)); // !!!
}
```

## 你说用到了node，如何使node程序在后台运行(即关掉了终端还能跑)

1. pm2, Advanced Node.js process manager
2. tmux
即：说白了，单独起一个进程／线程用来管理node.js的线程。

## 在同源策略的限制下，如何加载静态css和js资源

感觉这个问的就是跨域的方法而已, 面试官想要的答案应该是这个`Cross-Origin Resource Sharing`, 即跨域资源共享。

CORS分为两种:

### 简单请求

GET, HEAD, POST, 注意，当是POST方法时，Content-Type只有为下列三个字段才算是简单请求。
    * text/plain
    * multipart/form-data
    * application/x-www-form-urlencoded

简单请求的过程：

1. 浏览器直接发送CORS请求，具体来说，就是在头部中，添加一个`Origin`字段。
2. 如果Origin指定的源，不在许可范围内，会报跨域。
3. 如果在的话，服务器会返回的响应，会多几个头部字段。
```
Access-Control-Allow-Origin
Access-Control-Allow-Credentials, 表示是否允许发送cookie
Access-Control-Expose-Headers, 可选字段
```

### 非简单请求

非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

预检"请求用的请求方法是OPTIONS，表示这个请求是用来询问的。头信息里面，关键字段是Origin，表示请求来自哪个源。

## 移动端和pc的区别

[来自](http://www.cnblogs.com/zhuzhenwei918/p/6790859.html)

1. 兼容性: pc端主要考虑的是浏览器的兼容性，移动端主要考虑的是手机兼容性，由于大多数手机浏览器都是webkit内核，所以移动端主要考虑的是手机分辨率和尺寸的问题。

2. 事件不一样，移动端主要是触屏事件。

3. 布局上, 移动端主要是自适应。

4. 动画上，pc端一般js，移动端css3，因为简单高效。

5. 性能上，首屏渲染，用户响应延迟，动画帧率都要尤其注意在移动端上。

6. 网络环境，要考虑移动端经常网络信号不好的情况。

```
1. native app: oc, swift, java
2. web app: html, css, js
3. hybrid app: 1 + 2
```

## html5的特性

1. 语义类: header footer aside nav video section, 还有增加表单属性(email, number, calendar)
2. 连通性: websockets, Server-sent events
3. 离线存储: localStorage
4. 多媒体: video, audio
5. 图像: canvas, webgl, svg
6. 集成: history api, requestAnimationFrame
7. 其他很多很多


## nodejs

## js创建对象的几种方式

0. 字面量形式
1. 工厂模式
```
function createPerson(name, age, gender) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.gender = gener;
    o.sayName = function() {
        return this.name;
    };
    return o;
}
var p1 = createPerson('yuzf', 18, 'man');

// 缺点: 不能确定对象的类型
```
2. 构造函数模式
```
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var p1 = new Person('yuzf', 20, 'man');
// 1. 一个新对象被创建，它继承自Person.prototype
// 2. 构造函数Person被执行，相应的参数被传入，同时上下文(this)会被指定为这个新实例。
// 3. 如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象

// 缺点: 函数不能共享
```
3. 原型模式
```
function Person() {}
Person.prototype.name = 'yuzf';
Person.prototype.age = 18;

var p1 = new Person();
p1.name = 'hwy';
p1.age = 19;

// 缺点: 引用值类型共享
```
4. 动态原型模式
```
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    if (type this.sayName != function) {
        Person.prototype.sayName = function() {
            return this.name;
        };
    }
}
```
5. 寄生函数构造模式
```
// 即创建一个函数，该函数的模式仅仅是封装创建对象的代码, 然后返回新的创建对象
function Person(name, age, gender) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.gender = gender;
    return o;
}
var p1 = new Person('yuzf', 18, 'man');
```
6. 稳妥构造函数模式
```
// 适用于禁止使用this和new的环境
function Person(name, age, gender) {
    var o = new Object();
    // 可以在这里定义私有变量和函数
    o.sayName = function() {
        return name;
    };
    return o
}
var p1 = new Person('yuzf', 18, 'man');
p1.sayName();
// 只能使用sayName()方法
```

## 输入url

## ajax在jquery底层如何实现

* 0: 未打开, open()方法未调用。
* 1: 未发送, send()方法未调用。
* 2: 已获取响应头, send()方法已被调用，响应头和响应状态已经返回。
* 3: 正在下载响应体, responseText已经获取了部分数据。
* 4: 请求完成，整个请求过程结束了。


## Promise编程

[来自](http://es6.ruanyifeng.com/?search=Promise&x=0&y=0#docs/promise)

1. Promise新建后会立即执行。
2. 错误总是会被下一个catch语句捕获。


```
// 1
promise.then(() => {}, () => {}); // 第二个参数可选
// 2
promise
    .then(() => {});
    .catch(() => {});
```

Promise实现Ajax的例子
```
const getJSON = (url) => {
    const promise = new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();

        const handler = () => {
            if (client.readyState !== 4) {
                return;
            }
            if (client.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
};
getJSON('/xx.json', (content) => {
    console.log(content);
}, (error) => {
    console.log(error);
});
```

## 页面优化

## css3动画优化

[来自这里](https://www.w3cplus.com/animation/animation-performance.html)
[看这里](https://segmentfault.com/a/1190000000490328)
[二](http://zencode.in/14.CSS%E5%8A%A8%E7%94%BB%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.html)
[看这里](http://coolshell.cn/articles/9666.html)

### 浏览器解析

1. HTML解析器解析HTML, 转化为DOM树。
2. CSS解析，提取CSS规则, 转换为CSS规则树。
3. JavaScript解析，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.
4. attachment: HTML和CSS进行融合，根据CSS选择器，计算每个DOM元素上匹配的CSS样式。这一步结束之后，就确定了每个DOM元素上应该应用什么CSS样式规则, 即生成了Render Tree。
5. layout: 布局。上一步确定了每个DOM元素的样式规则，这一步就是具体计算每个DOM元素最终在屏幕上显示的大小和位置。Web页面中元素的布局是相对的，因此一个元素的布局发生变化，会联动地引发其他元素的布局发生变化。比如，`<body>`元素的width变化会影响其后代元素的宽度。因此，对于浏览器而言，布局过程是经常发生的。 任何几何尺寸变了，就会引起回流。
6. paint：绘制。本质上就是填充像素的过程。包括绘制文字、颜色、图像、边框和阴影等，也就是一个DOM元素所有的可视效果。一般来说，这个绘制过程是在多个层上完成的。
7. Composite：渲染层合并。前面也说过，对于页面中DOM元素的绘制是在多个层上进行的。在每个层上完成绘制过程之后，浏览器会将所有层按照合理的顺序合并成一个图层，然后在屏幕上呈现。对于有位置重叠的元素的页面，这个过程尤其重要，因为一量图层的合并顺序出错，将会导致元素显示异常。(此时是位图)
8. GPU绘制"位图"到屏幕上。

当解析到JavaScript后，可能会修改DOM的一些属性。这里就涉及到重排和重绘了, 它们是主要影响性能的因素。

在像素渲染流水线中，得知，如果我们能幸运的避免Layout和Paint，那么性能是最好的，言外之意，动画性能也将变得最佳。那么在CSS中可能通过不同的方式来创建新图层。其实这也就是大家常说的，通过CSS的属性来触发GPU加速。浏览器会为此元素单独创建一个“层”。当有单独的层之后，此元素的Repaint操作将只需要更新自己，不用影响到别人。你可以将其理解为局部更新。所以开启了硬件加速的动画会变得流畅很多。

#### 其他

1. `display: none`会引起回流和重绘。`visibility: hidden`只会引起重绘。回流的成本非常高。


#### 硬件加速

那么所谓的translate3d硬件加速到底做了什么事情呢？在Chrome中当某个DOM元素开启硬件加速之后，浏览器会为此元素单独创建一个“层”。当有单独的层之后，此元素的repaint操作将只需要更新自己，不用影响到别人。你可以将其理解为局部更新。所以开启了硬件加速的动画会变得流畅很多。

#### 总结

1. 减少layout和paint: 我们需要尽量使用transform、opacity这类不触发layout和paint操作的CSS属性。
2. 尽量减少或者固定层的数量，不要在动画过程中创建层
3. 尽量减少层的更新（paint）次数
4. 硬件加速: .test { transform: translate3d(0, 0, 0); }


## JS事件模型与事件流介绍一下，事件代理用过吗？

## 浏览器原理，和他讲了一通。Js是怎么解析的？什么时候执行的?

页面渲染机制。

## RequestAnimationFrame与setInterval的区别

[参考](http://www.cnblogs.com/2050/p/3871517.html)

1. RequestAnimationFrame会把每一帧里面的DOM操作集中在一起，在一次重绘或回流中就完成，并且重绘或回流的时间间隔仅仅跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。
2. 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这就意味着更少的cpu，gpu和内存的使用量。
3. 可以这么说，requestAnimationFrame就是一个性能优化版、专为动画量身打造的setTimeout，不同的是requestAnimationFrame不是自己指定回调函数运行的时间，而是跟着浏览器内建的刷新频率来执行回调，这当然就能达到浏览器所能实现动画的最佳效果了。
4. 关于setInterval, 请参考任务队列(task queue)。

## 如何减少DOM操作次数

1. 局部变量缓存。
2. 使用fragmentDocument
3. 使用类名来更改DOM

## CSS优先级

1. Importance
    * 浏览器默认样式
    * 用户自定义样式
    * 开发者定义样式
    * 开发者定义样式， !important
    * 用户自定义样式， !important
2. Specifity
    * style
    * id
    * class, 属性选择器，伪类选择器
    * 标签, 伪元素选择器
3. Source Order

## 超出部分省略

```
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

## 画三角形

```
.tri {
    width: 0;
    height: 0;
    font-size: 0;
    border-width: 40px;
    border-style: solid;
    border-color: #333 tranparent tranparent tranparent;
    border-bottom: none;
}
```

## undefined与null的区别

* null表示"没有对象"，即该处不应该有值, 用于初始化引用类型。
* undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义
* undefined派生自null。

## 你还有什么问题要问的吗？

1. 给我的职业道路一些建议。
2. 你所知道厉害的人在前端道路上是如何学习的?
2. 如何定居。

## 参考

[](https://www.nowcoder.com/discuss/32908)
[react, redux](https://www.zhihu.com/question/41312576)
[es6学习笔记10--箭头函数](http://www.cnblogs.com/huansky/p/5684867.html)
[阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)
