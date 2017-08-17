// 寄生式继承
// 原理: 创建一个仅用于封装继承过程的函数
// 该函数在内部以某种方式来增强对象
// 最后再像是真地是做了它做了所有工作一样返回对象

function createAnother(original) {
  // 以某种方式创建一个新对象，任何方式都可以
  var o = object(original);
  // 增强该对象
  o.sayName = function() {
    return this.name;
  };
  return o;
}

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var Person = {
  name: 'yuzf',
  friends: ['white', 'black']
};

var anotherPerson = createAnother(Person);
console.log(anotherPerson.sayName());
