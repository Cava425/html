## 基本语法

### 变量与常量

`var a = 10;`

`var DEBUG = 1`

数据类型
- 数字
- 字符串
- 布尔值
- 未定义值 undefined
- 空值 null

运算符

算数

 +、-、*、/、%、++、--
 
赋值

=

比较

`>, <, >=, <=, ==, !=`

逻辑

条件


类型转换

string to number

- Number()
- parseInt()
- parseFloat()


number to string
- 2023 + ''
- toString()
```
var a = 2023;
var b = a.toString();
```


函数
- 没有返回值
```
function fun_name(param1, param2, ..., param_n){
	...
}
```
- 有返回值的函数
```
function fun_name(param1, param2, ..., param_n){
	...
	return value;
}
```
- 函数调用
	- 直接调用
	```
	function add(a, b){
		return a + b;
	}
	var c = add(a, b);
	```
	- 在超链接中调用
	```
	<a href="javascript:add(a, b)"></a>
	```
	- 在事件中调用
	```
	<input type="button" onclick="add(a, b)" />
	```
	
内置函数
- parseInt()
- parseFloat()
- isFinite()
- isNaN()
- escape() 字符转编码
- unescape() 字符串解码
- eval() 执行字符串表示的表达式


闰年
定义：某一年y，能被4整除且不能被100整除，或者能被400整除。
```
function isLeapYear(year){
	if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
		return true;
	}else{
		return false;
	}
}
```


内置对象

字符串对象

```
var a = "2008";
a.length	-> out string length

var b = "Hello World";
b.toLowerCase();
b.toUpperCase();

b.charAt(i)	-> get i_th char
b.indexOf('o');
b.lastIndexOf('o');


b.substring(start, end)    -> get substring [start, end)

b.replace(old, replacement);
b.replace(regex, replacement);

var c = "1,2,3";
c.split(",")

```


数组

```
var a = new Array("item1", "item");
var a = ["item1", "item2"];


a.length

a.slice(start, end)


a.unshift("1", 2"")    -> add first
a.push("1", "2")       -> add tail

a.shift()    -> delete first
a.pop()

a.sort("sort method");

a.reverse();

a.join("-")
```


时间对象

```
var d = new Date();

d.getDay()     -> 输出星期（0-周日）


function getWeekend(date){
	var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	return arr[date.getDay()];
}
```

