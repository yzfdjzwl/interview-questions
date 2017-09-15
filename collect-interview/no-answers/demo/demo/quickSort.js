function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let middleItem = arr.splice(middleIndex, 1)[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (middleItem < arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat([middleItem], quickSort(rightArr));
}

console.log(quickSort([1, -1, 0, 9, 8, 10, 12, -8, 5]));
