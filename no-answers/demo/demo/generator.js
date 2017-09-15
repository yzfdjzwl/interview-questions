function* sayHelloWorld() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var it = sayHelloWorld();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
