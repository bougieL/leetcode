function quickSort(arr) {
  if (arr.length < 2) return arr;
  const centerPos = Math.floor(arr.length / 2);
  const centerVal = arr.splice(centerPos, 1)[0];
  const left = [];
  const right = [];
  for (const item of arr) {
    if (item <= centerVal) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return [...quickSort(left), centerVal, ...quickSort(right)];
}

console.log(quickSort([3, 21, 99032, 432, -1]));
