/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var r = []
  function recur(used = [], unused = []) {
    if (used.length === nums.length) {
      r.push(used)
    } else {
      for (let i = 0; i < unused.length; i++) {
        var rest = [...unused]
        rest.splice(i, 1)
        recur([...used, unused[i]], rest)
      }
    }
  }

  recur([], nums)
  
  return r
};
// @lc code=end
