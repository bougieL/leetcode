/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  var r = 1
  for (var i = 0; i < s.length; i++) {
    if (i + r > s.length - 1) return r
    var as = s.charAt(i)
    for (var j = i + 1; j < s.length; j++) {
      const j1 = s.charAt(j)
      if (as.includes(j1)) {
        break
      } else {
        as += j1
        if (as.length > r) r = as.length
      }
    }
  }
  return r
};
// @lc code=end
