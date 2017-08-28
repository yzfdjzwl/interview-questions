// 解决原型链继承的问题
// 借用构造函数

// 在子类型构造函数的内部调用超类型构造函数。
function SuperType() {
  this.colors = ['red', 'green', 'black'];
}

function SubType() {
  SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('blue');
console.log(instance1.colors);

var instance2 = new SubType();
instance2.colors.push('white');
console.log(instance2.colors);
