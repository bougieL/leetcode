function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const pivot = nums.shift();
  const left = [];
  const right = [];
  for (const item of nums) {
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
