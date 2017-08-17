// 寄生组合式继承
// 由于组合式继承会有一个缺点
// 就是会调用两次超类的构造函数
// 并且第二次调用的时候，还会屏蔽第一次调用超类生成的原型同名属性。
// 于是就使用寄生式的方法来解决这个问题
// 说白了，不就是需要一个原型的副本而已嘛。
// 使用寄生式方法将副本拷贝一份就可以了。

function SuperType(name) {
  this.name = name;
  this.friends = ['first', 'second'];
}

SuperType.prototype.sayName = function() {
  return this.name;
}

// 属性继承
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

// 方法继承
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
  return this.age;
};

function object(prototype) {
  function F() {}
  F.prototype = prototype;
  return new F();
};

// 寄生式
function inheritPrototype(sbType, spType) {
  var prototype = object(spType.prototype); // 创建对象
  prototype.constructor = sbType; // 增强对象
  sbType.prototype = prototype; // 指定对象
}

var instance1 = new SubType('yuzf', '21');
instance1.friends.push('third');
console.log(instance1.sayName());
console.log(instance1.sayAge());
console.log(instance1.friends);

var instance2 = new SubType('hwy', '20');
instance2.friends.push('forth');
console.log(instance2.sayName());
console.log(instance2.sayAge());
console.log(instance2.friends);
