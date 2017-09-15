## 框架

* express原理
* koa的了解程度

## 高频

* 采用nodejs搭建http服务器，前端向该服务器传递的数据类型是什么
* 关于node与java对比的总结
* module, exports, require
* 垃圾回收, 事件循环, 常用api, 互斥锁
* 优先级关系: process.nextTick > promise.then > setTimeout > setImmediate
* Buffer模块是干什么的
* Stream是什么，使用的两种模式。
* http模块如何将异步处理发哪个是实现成同步处理方式。
* nodejs架构，优缺点，回调。
* libuv底层的实现
* nodejs 特性， http server与其他http server的比较，比如apache
* 如何使node程序在后台运行(即关掉了终端还能跑)

## 部分解答

### module.exports, exports的区别

1. module.exports 初始值为一个空对象 {}
2. exports 是指向的 module.exports 的引用
3. require() 返回的是 module.exports 而不是 exports

### microtask, macrotask

```
第一次执行 会把所有的同步代码执行完毕 所有的异步操作 分别压入 不同栈 macro(宏)和micro(微)

然后清空微1
处理 微 里面的所有任务 遇到异步 如果是微压入微后面继续处理 如果宏压入宏后面

然后处理宏任务1
如果遇到异步  如果是微压入微后面继续处理 如果宏压入宏后面

然后清空微2
同上
然后处理宏3
然后处理微3

一直到 没有再出现微任务
一直到 没有再出现宏任务

运行结束


概括就是：

1. 执行所有代码。
2. 清空微
3. 执行宏一个
4. 清空微
```
