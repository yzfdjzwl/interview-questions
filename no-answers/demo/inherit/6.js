// 寄生式继承
// 原理: 创建一个仅用于封装继承过程的函数
// 该函数在内部以某种方式来增强对象
// 最后再像是真地是做了它做了所有工作一样返回对象
// 同样，引用类型值也会被共享
// 但是，函数不能被共享

function createAnother(original) {
  var o = object(original); // 以某种方式创建一个新对象，任何方式都可以
  o.sayName = function() {  // 增强该对象
    return this.name;
  };
  return o;                 // 返回该对象
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
anotherPerson.friends.push('newF');
console.log(anotherPerson.sayName());
console.log(anotherPerson.friends);

var yetAnotherPerson = createAnother(Person);
console.log(yetAnotherPerson.sayName());
console.log(yetAnotherPerson.friends);
