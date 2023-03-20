/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var arr = nums1.concat(nums2).sort((a, b) => a - b);
  var pivot = arr.length / 2;
  return Number.isInteger(pivot)
    ? (arr[pivot] + arr[pivot - 1]) / 2
    : arr[Math.floor(pivot)];
};
// @lc code=end
