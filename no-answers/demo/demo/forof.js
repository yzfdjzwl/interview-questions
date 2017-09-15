const arr = ['green', 'blue', 'yellow'];

// 遍历键
for (let i in arr) {
  console.log(i);
  console.log(arr[i]);
}

// 遍历值
for (let i of arr) {
  console.log(i);
  console.log(arr[i]);
}
