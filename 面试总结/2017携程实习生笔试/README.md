## 考察encodeURI

encodeURI(), decodeURI()它们都是Global对象的方法。

* encodeURI()通过将某些字符的每个实例替换代表字符的UTF-8编码的一个或多个转义字符来编码URI。规则如下：
	1. 不会编码保留字符<code> ; , / ? : @ & = + $ </code>
	2. 不会编码未转义的字符：字母，十进制数字以及<code>- _ . ! ~ * ' ( )</code>
	3. 不会编码Number sign:#
	4. 需要注意：由于'&', '+', '='未被编码，在GET和POST请求中被视为特殊字符，所以encodeURI不能形成适当的 HTTP GET 和POST请求。因此，要使用<code>encodeURIComponent()</code>来编码部分字符。
* encodeURIComponent()会将传入的部分字符串部分全部进行编码。它的编码规则如下：
	1. 未转义的字符：字母，十进制数字以及<code>- _ . ! ~ * ' ( )</code>
	2. 除了上面的字符，其他字符都会被编码。
* decodeURI()作用和encodeURI()相反。
* decodeURIComponent()作用和encodeURIComponent()相反

## 考察linux

linux文件和目录的唯一标识符是什么？

```
inodes节点
```

## 考察BOM对象

其他的见[Github](https://github.com/yzfdjzwl/JavaScript)

### 系统对话框

这个东西是最开始学习JavaScript了解了的，但是很久不看就有点儿记不清楚了。所以重新总结一下。

一共有三种系统对话框，如下：

```
// alert()

// confirm('Are you a boy?')
if(confirm('Are you a boy')) {
	console.log(true);
} else {
	console.log(false);
}

// prompt(), 参数有两个，第二个可选。
// 第一个参数显示给用户的提示信息，第二个参数是文本输入域的默认值
var result = prompt('Please write your name:' + 'john'); 
var result2 = prompt('Please write your name:'); 
if(result2 !== null) {
	console.log(result2);
}
```

## 考察==和===的区别

'=='会转型。

'==='不会转型。
```
0 == '0' // true
0 === '0' // false
```

## 考察Date类型

```
Date.parse('1900-01-19');

// -2207433600000
```

1. 创建一个日期对象, var now = new Date(), 新对象自动获得当前时间和对象。

2. 如果想根据指定日期和时间的话，就必须传入该日期的毫秒数(从UTC时间1970年1月1日起)。
	* Date.parse('May 25, 2004'), 转成毫秒数。 (UTC时间)
	* Date.UTC(2005, 4, 5, 17, 55, 55), 转成毫秒数。2005-05-05-17-55-55。(GMT时间)
	* new Date()会模仿上面2种方法，也就是说可以直接向Date()构造函数传入上面两种参数的一种。
	* 但是有一点儿区别，new Date()模仿的时候，都是根据UTC(世界协调时间)时间创建的，而非GMT(格林尼治标准时间)创建。

## 考察CSS3

下列不是transition-timing-function的单位的是？

* linear
* 100ms
* inherite
* steps(10)

## 考察？

```
(50|2 == 50)
(50|16 == 50)
(50|4 == 50)
(50|32 == 50)
```

## 不能触发layout和paint的是?

## 考察canvas

## 考察闭包

```
function a() {
	var arg = [];	
	for(var i = 0;i < 10;i++) {
		arg[i] = function() {
			return i;
		};
	}
	return arg;
}

a()[1](); // 10
```

## 考察执行环境与作用域

```
var scope = 1;
function p() {
	var scope;
	console.log(scope);
	scope = 3;
}

p(2); // 2
```

## 谈谈对this的理解

## 考察ES6

## 附加题，见button.html
