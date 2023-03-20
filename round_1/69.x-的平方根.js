/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   return Math.floor(Math.sqrt(x))
// };
var mySqrt = function(x) {
  if (x === 1) return 1
  if (x === 0) return 0
  let l = 0
  let r = x
  while(l < r) {
    const m = Math.floor((l + r) / 2)
    const s1 = m * m
    const s2 = (m + 1) * (m + 1)
    if (x >= s1 && x < s2) {
      return m
    }
    if (x > s1) {
      l = m + 1
    }
    if (x < s1) {
      r = m - 1
    }
  }
};
// @lc code=end

console.log(mySqrt(6))
