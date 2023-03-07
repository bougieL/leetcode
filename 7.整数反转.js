/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res = 0
  var o = x >= 0
  x = Math.abs(x)
  while(x !== 0) {
    res = res * 10 + x % 10
    x = Math.floor(x / 10)
  }
  if (res > 2 ** 31 - 1) return 0
  return o ? res : -res
};
// @lc code=end
