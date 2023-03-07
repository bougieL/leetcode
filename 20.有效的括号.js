/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  var st = []
  for(var v of s) {
    if (v === '(') {
      st.push(')')
    } else if (v === '[') {
      st.push(']')
    } else if (v === '{') {
      st.push('}')
    } else if (v !== st.pop()) {
      return false
    }
  }
  return st.length === 0
};
// @lc code=end

