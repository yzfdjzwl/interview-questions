[来源yahoo](https://developer.yahoo.com/performance/rules.html)
[参考](http://www.cnblogs.com/xianyulaodi/p/5755079.html#_label1)

<!-- vim-markdown-toc GFM -->
* [网页内容](#网页内容)
	* [减少HTTP请求次数](#减少http请求次数)
		* [合并文件](#合并文件)
		* [CSS 雪碧图](#css-雪碧图)
		* [图片映射](#图片映射)
		* [行内图片(Base 64编码)](#行内图片base-64编码)
	* [减少DNS查询次数](#减少dns查询次数)
	* [避免重定向](#避免重定向)
	* [缓存Ajax](#缓存ajax)
	* [延迟加载组件](#延迟加载组件)
	* [预加载组件](#预加载组件)
	* [减少DOM数量](#减少dom数量)
	* [跨域分离组件](#跨域分离组件)
	* [尽量少使用iframe](#尽量少使用iframe)
	* [避免404](#避免404)
* [CSS](#css)
	* [避免使用CSS表达式](#避免使用css表达式)
	* [避免使用@import](#避免使用import)
	* [避免使用滤镜](#避免使用滤镜)
	* [将样式表放在head标签里](#将样式表放在head标签里)
* [JavaScript](#javascript)
	* [去除重复的脚本](#去除重复的脚本)
	* [尽量减少DOM访问](#尽量减少dom访问)
	* [用智能的事件处理器](#用智能的事件处理器)
	* [把脚本放在底部](#把脚本放在底部)
* [JavaScript，CSS部分](#javascriptcss部分)
	* [把JavaScript和CSS使用外部文件](#把javascript和css使用外部文件)
	* [压缩JavaScript和CSS](#压缩javascript和css)
* [图片部分](#图片部分)
	* [优化图片](#优化图片)
	* [优化sprite](#优化sprite)
	* [不用使用HTML缩放图片](#不用使用html缩放图片)
	* [使用小且可以存储的favicon.ico](#使用小且可以存储的faviconico)
* [cookie](#cookie)
	* [给cookie减肥](#给cookie减肥)
	* [把组加放在不含cookie的域下](#把组加放在不含cookie的域下)
* [移动端](#移动端)
	* [保证所有组件都小于25k](#保证所有组件都小于25k)
	* [把组件打包到一个复合文档里](#把组件打包到一个复合文档里)
* [服务器](#服务器)
	* [Gzip组件](#gzip组件)
	* [避免图片的src属性为空](#避免图片的src属性为空)
	* [配置ETags(实体标签)](#配置etags实体标签)
	* [对ajax使用get请求](#对ajax使用get请求)
	* [尽早清空缓冲区](#尽早清空缓冲区)
	* [使用CDN](#使用cdn)
	* [添加Expires或者Cache-Control HTTP 头](#添加expires或者cache-control-http-头)

<!-- vim-markdown-toc -->

# 网页内容

## 减少HTTP请求次数

### 合并文件

将多个script合并为一个文件，将多个css文件合并为一个文件。

### CSS 雪碧图

### 图片映射

将多个图片组合在一起，减少了HTTP请求次数，但是前提是要求页面中，图片是连续的, 比如说导航条。但是不推荐这种方法，因为设置坐标映射，太花时间而且又容易错。

### 行内图片(Base 64编码)

一般都是把图片嵌入到样式表中。

## 减少DNS查询次数

浏览器不会下载任何东西，直到DNS解析结束。

## 避免重定向

## 缓存Ajax

## 延迟加载组件

## 预加载组件

## 减少DOM数量

## 跨域分离组件

可以保证并行下载，但是不能超过2～4个域，比如将HTML和动态内容放在<code>www.example.org</code>, 把静态内容放在<code>static1.example.org</code>和<code>static2.example.org</code>中。

## 尽量少使用iframe

iframe缺点：

* 代价高昂，即使是空白的iframe
* 阻塞页面渲染
* 非语意

## 避免404

会浪费服务器资源，并且这种下载会阻塞并行下载。浏览器还会去解析404响应体。

# CSS 

## 避免使用CSS表达式

## 避免使用@import

## 避免使用滤镜

因为使用滤镜会阻塞渲染

## 将样式表放在head标签里

这么做的原因是放在顶部，浏览器的机制是会逐渐渲染。如果放在底部，大部分浏览器会先下载内容，但是不能显示出来，因为CSS在最底部。

# JavaScript

## 去除重复的脚本

重复的脚本会浪费下载时间和执行时间。

## 尽量减少DOM访问

访问DOM元素是很慢的，因此需要：

* 缓存已经访问过的元素的索引。
* 先"离线"更新节点，再把它们添加到DOM树上。
* 避免用JavaScript修复布局问题。

## 用智能的事件处理器

举例来说，使用事件委托，因为事件是可以冒泡的。

## 把脚本放在底部

因为脚本下载会阻塞页面渲染，当然也可以使用defer属性或sync属性

# JavaScript，CSS部分

## 把JavaScript和CSS使用外部文件

因为它们可以被浏览器缓存起来。

## 压缩JavaScript和CSS

# 图片部分

## 优化图片

可以对图片进行压缩等等。

## 优化sprite

## 不用使用HTML缩放图片

即不要在HTML中对图片设置高度和宽度。

## 使用小且可以存储的favicon.ico

网站图标文件，不管服务器有没有，都要去请求。所以要保证这个图标

* 存在
* 尽量小
* 设置一个长的过期时间

# cookie

## 给cookie减肥

* 清除不必要的cookie
* 保证cookie尽量小
* 给cookie设置合适的域级别, 以免影响其他子域
* 设置合适的有效期

## 把组加放在不含cookie的域下

# 移动端

## 保证所有组件都小于25k

## 把组件打包到一个复合文档里

# 服务器

## Gzip组件

HTTP1.1开始，web客户端就有了支持压缩的Accept-EncodingHTTP请求头

```
Accept-Encoding: gzip
```

## 避免图片的src属性为空

## 配置ETags(实体标签)

实体标签，是服务器和浏览器来决定缓存中组件和源服务器的组件是否匹配的一种机制。实体也就是组件：图片，脚本，样式表等等。添加ETags可以提供一种实体验证机制，比最后修改日期更加灵活。一个ETag是一个字符串，作为一个组件某一具体版本的唯一标识符。唯一的格式约束是字符串必须用引号括起来，源服务器用相应头中的ETag来指定组件的ETag：

```
HTTP/1.1 200 OK
    Last-Modified: Tue, 12 Dec 2006 03:03:59 GMT
    ETag: "10c24bc-4ab-457e1c1f"
    Content-Length: 12195
```

然后，如果浏览器必须验证一个组件，它用If-None-Match请求头来把ETag传回源服务器。如果ETags匹配成功，会返回一个304状态码，这样就减少了12195个字节的响应体。

```
GET /i/yahoo.gif HTTP/1.1
	Host: us.yimg.com
    If-Modified-Since: Tue, 12 Dec 2006 03:03:59 GMT
    If-None-Match: "10c24bc-4ab-457e1c1f"
    HTTP/1.1 304 Not Modified
```

## 对ajax使用get请求

因为post请求，是通过2步来实现的，先发送HTTP头，再发送数据。

## 尽早清空缓冲区

## 使用CDN

## 添加Expires或者Cache-Control HTTP 头

Expires的意思是到期。

* 对于静态组件：通过设置一个遥远的将来时间作为Expires来实现永不失效。
* 对于动态组件：用合适的Cache-ControlHTTP头来让浏览器进行条件性的选择。


