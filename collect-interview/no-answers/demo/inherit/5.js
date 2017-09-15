// 原型式继承
// 借助原型已有的对象创建新对象

// 但是: 它和原型链继承一样，引用类型值一样会被共享

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var Person = {
  name: 'yuzf',
  friends: ['hwy', 'lgc', 'ml', 'hr'],
};

var anotherPerson = object(Person);
anotherPerson.name = 'zyz';
anotherPerson.friends.push('jr');
console.log(anotherPerson.name);
console.log(anotherPerson.friends);

var yetAnotherPerson = object(Person);
yetAnotherPerson.name = 'wahaha';
yetAnotherPerson.friends.push('mmm');
console.log(yetAnotherPerson.name);
console.log(yetAnotherPerson.friends);

// es5使用Object.create()方法规范了原型式继承
