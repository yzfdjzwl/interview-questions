let bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bin[0]);

let binString = bin.toString('utf-8'); // 104
console.log(binString); // 'hello'

bin[0] = 0x48; // 字符串只能读，但是buffer可以写
console.log(bin);
console.log(bin.toString('utf-8')); // 'Hello'

let sub = bin.slice(2);
console.log(sub);

let dup = new Buffer(bin.length);
bin.copy(dup);
console.log(dup);
