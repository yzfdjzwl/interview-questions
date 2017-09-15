var g = function* () {
  try {
    yield;
  } catch(e) {
    console.log('内部捕获', e);
  }
};

var it = g();
it.next();

try {
  it.throw('a');
  it.throw('b');
} catch(e) {
  console.log('外部捕获', e);
}

// 第一个错误被内部的try catch捕获
// 由于第一个try catch已经被shying了，那么第二个错误会被外部的try catch 捕获
