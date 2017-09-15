function foo() {
  setTimeout(() => {
    console.log('arguments:');
    console.log(arguments);
  }, 1000);
}

foo(1, 2, 3, 4);

console.log((function() {
  return (() => this.x).bind({ x: 'inner' })();
}).call({ x: 'outer' }));
