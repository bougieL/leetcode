/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
  // if (target > nums[nums.length - 1] || target < nums[0]) return -1;
  // function helper(arr, startIndex) {
  //   // if (arr.length === 1) {
  //   //   if (arr[0] === target) {
  //   //     return startIndex
  //   //   } else {
  //   //     return -1
  //   //   }
  //   // }
  //   const centerPos = Math.floor((arr.length - 1) / 2);
  //   const centerVal = arr[centerPos];
  //   if (centerVal === target) {
  //     return startIndex + centerPos;
  //   } else if (centerVal > target) {
  //     return helper(arr.slice(0, centerPos), startIndex);
  //   } else if (centerVal < target) {
  //     return helper(arr.slice(centerPos + 1), startIndex + centerPos + 1);
  //   } else {
  //     return -1;
  //   }
  // }
  // return helper(nums, 0);
};
// @lc code=end
