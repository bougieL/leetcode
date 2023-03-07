/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  var r = "";

  for (let i = 0; i < s.length; i++) {
    match(i, i);
    match(i, i + 1);
  }

  function match(j, k) {
    while (s[j] && s[k] && s[j] === s[k]) {
      j = j - 1;
      k = k + 1;
    }
    if (k - j + 1 - 2 > r.length) {
      r = s.slice(j + 1, k);
    }
  }

  return r;
};
// @lc code=end
