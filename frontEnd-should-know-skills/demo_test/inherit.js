// 原型链继承
function Parent() {
  this.name = 'yuzf';
}

Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
}

Child.prototype = new Parent();
var child1 = new Child();
console.log(child1.getName());
