/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var res = [[]];

  for (let i = 1; i <= nums.length; i++) {
    function recur(used, unused) {
      if (used.length === i) {
        res.push(used);
      } else {
        unused.forEach((item, index) => {
          recur([...used, item], unused.slice(index + 1));
        });
      }
    }
    recur([], nums);
  }

  return res;
};
// @lc code=end
