/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let max = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j <= nums.length - i; j++) {
//       let sum = nums.slice(i, i + j).reduce((acc, cur) => acc + cur, 0);
//       if (sum > max) {
//         max = sum
//       }
//     }
//   }
//   return max
// };
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];
  nums.forEach((v) => {
    sum = Math.max(sum + v, v);
    max = Math.max(max, sum)
  });
  return max
};
// @lc code=end
