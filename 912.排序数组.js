/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  // const { length } = nums;
  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < length - 1 - i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
  //     }
  //   }
  // }
  // return nums;
  if (nums.length <= 1) return nums
  const centerPos = Math.floor((nums.length - 1) / 2)
  const centerVal = nums[centerPos]
  nums.splice(centerPos, 1)
  const left = []
  const right = []
  for (const item of nums) {
    if (item < centerVal) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  return sortArray(left).concat(centerVal).concat(sortArray(right))
};
// @lc code=end

