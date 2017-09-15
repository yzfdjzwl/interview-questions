function SuperType() {
  this.colors = ['red', 'blue'];
}

SuperType.prototype.getColors = function() {
  return this.colors;
};

function SubType() {
}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('green');
console.log(instance1.getColors());

var instance2 = new SubType();
console.log(instance2.getColors());
