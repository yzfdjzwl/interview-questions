const randomArray = new Array(10);
for (let i = 0; i < 10; i++) {
  randomArray[i] = Math.floor(Math.random() * (100 - 10 + 1) + 10);
}
randomArray.sort();
console.log(randomArray);

// Math.random() * (maxNum - minNum + 1) + 10
