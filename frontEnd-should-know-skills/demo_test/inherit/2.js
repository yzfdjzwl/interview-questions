function SuperType() {
  this.colors = ['red', 'blue'];
}

SuperType.prototype = function() {
  return this.colors;
};

function SubType() {
}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('green');
console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors);
