/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const set = new Set()

  for (const item of nums) {
    if (set.has(item)) {
      return item
    }
    set.add(item)
  }
};
// @lc code=end

