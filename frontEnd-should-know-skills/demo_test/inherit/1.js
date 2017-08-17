// 原型链继承
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
};

function SubType() {
  this.subProperty = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
  return this.subProperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
console.log(instance.toString());
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);
console.log(instance instanceof Object);
