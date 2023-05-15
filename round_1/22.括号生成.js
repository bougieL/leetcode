/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []

  function helper(ln, rn, str) {
    if (str.length === 2 * n) {
      res.push(str)
    }
    if (ln > 0) {
      helper(ln - 1, rn, str + '(')
    }
    if (rn > ln) {
      helper(ln, rn - 1, str + ')')
    }
  }
  helper(n, n, '')
  return res
};
// @lc code=end

console.log(generateParenthesis(10))
