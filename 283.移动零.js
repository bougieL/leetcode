/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let n = 0;
  for (let i = 0; i < nums.length - n; i++) {
    const val = nums[i]
    if (val === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      n++
    }
  }
  return nums
};
// @lc code=end

// [0,1,0,3,12]
console.log(moveZeroes([0, 0, 1]));
