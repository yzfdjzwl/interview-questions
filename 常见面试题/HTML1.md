### 问：Doctype有什么作用?严格模式和混合模式如何区别？它们有什么意义？

> 答：Doctype位于文档的最前面，处于标签的前面。用于告诉浏览器的解析器用什么文档类型规范来解析这个文档。严格模式(标准模式)是浏览器浏览器按W3C标准来解析来解析文档。而混杂模式(怪异模式)是浏览器将会以宽松的向后兼容方式显现，也就是浏览器用自己的方式来解析文档。

### 问：五大浏览器的内核是什么？

> 答：IE：Trident内核；Firefox：gecko内核；Safari：webkit内核；Opera：Blink内核；Chrome：Blink(基于webkit)

### 问：什么是标签语意化，为什么要标签语意化

> 答：

* 裸奔好看

* 用户体验(title、alt)

* 有利于SEO

* 方便设备解析

* 有利于合作，遵守W3C标准


### 问：link和import的区别

> 答：

* link是XHTML标签，除了加载CSS还可以加载其他的，而@import只能加载CSS。

* link引用CSS时，在页面载入时同时加载；@import需要页面完全载入以后才加载。

* link支持JavaScript控制DOM去改变样式，而@import不支只支持。

### 问：说说target的取值和作用

> 答：

* <code>_blank</code>, 在新浏览器窗口打开链接文件。

* <code>_self</code>， 所有没有指定target标签的a链接默认取值。

* <code>_parent</code>, 将链接的文件载入含有该链接框架的父框架集或父窗口中。如果含有该链接的框架不是嵌套的，则在浏览器全屏窗口中载入链接的文件，就象<code> _self</code> 参数一。

* <code>_top</code>, 在当前的整个浏览器中打开所链接的文档，因而会删除所有框架。

### 问：iframe有哪些缺点

> 答:

* iframe会阻塞主页面的onload事件。

* 不利用SEO

* iframe和主页面共享连接池，而浏览器对相同域的连接有限制。所以会影响页面的并行加载。

为了饶开第一个和第三个问题，可以用JavaScript给iframe动态设置src。

### 问：如何实现浏览器内多个标签页通信

> 答：

1. websocket，sharedWorker

2. localstorage，cookies

```
// 需要注意的设置相同的键值不会再次触发事件
// storage事件监听增加，修改，删除的动作。
function sendMsg(text) {
	window.localStorage.setItem('msg', text);
}

window.addEventListener('storage', function(evt) {
	if(evt.key == 'msg') {
		console.log(newValue);
	}
});


// 使用cookie

// 获取cookie
document.cookie

// 对cookie进行存/放
document.cookie = 'key=value'; //key存在时，就修改为value，不存在，则创建。
```

### 问：如何实现一个圆形的可点击区域？

### 问：get和post的区别

* HTTP规范指出，get从服务器上获取资源，post是向服务器上传资源

* get会把参数加到URL中，post不会

* get传输的数据量小，post传输的数据量相对大一些。

* get安全性低，post安全性高。

### 问：CSS的优先级？

### 问：性能优化的问题？

* 减少HTTP请求次数。

### 问：触发BFC的条件有哪些？
