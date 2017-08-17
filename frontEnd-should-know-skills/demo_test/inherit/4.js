// 借用构造函数无法复用函数, 即无法使用prototype
// 组合继承
// 原型链+借用构造函数
// 缺点: 每次都会调用2次超类的构造函数
// 在第二次调用超类的时候: 会屏蔽第一次调用超类时继承的同名属性。

function SuperType(name) {
  this.colors = ['red', 'green', 'blue'];
  this.name = name;
}

SuperType.prototype.sayName = function() {
  return this.name;
};

// 继承属性
function SubType(name, age) {
  SuperType.call(this, name); // 第二次调用超类
  this.age = age;
}

// 继承方法
SubType.prototype = new SuperType(); // 第一次调用超类
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  return this.age;
};

var instance1 = new SubType('yuzf', 20);
instance1.colors.push('white');
console.log(instance1.sayName());
console.log(instance1.sayAge());
console.log(instance1.colors);

var instance2 = new SubType('hwy', 19);
instance2.colors.push('yellow');
console.log(instance2.sayName());
console.log(instance2.sayAge());
console.log(instance2.colors);
