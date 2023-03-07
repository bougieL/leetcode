/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // x = String(x)
  // return x === x.split('').reverse().join('')

  if (x < 0) return false
  if (x < 10) return true
  x = String(x)
  var n = 0
  var res = true
  while (n <= x.length / 2 - 1) {
    if (x[n] !== x[x.length - 1 - n]) {
      res = false
      break
    }
    n++
  }
  return res
};
// @lc code=end
