/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var v = s.match(/^[^\s]*((\+|\-)?\d+)/)?.[0]
  // console.log(v)
  if (v === undefined) return 0
  return v > 0 ? Math.min(v, 2 ** 31 - 1) : Math.max(v, -(2 ** 31));
};
// @lc code=end
