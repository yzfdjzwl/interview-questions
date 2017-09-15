const arr = [1, 2, 3, 1, 2, 3, 4, 8, 1];
const unique = arr.filter((item, index) => {
  // indexOf返回第一个索引值
  // 如果当前索引不是第一个索引值，则表示重复
  return arr.indexOf(item) === index;
});
console.log(unique);
