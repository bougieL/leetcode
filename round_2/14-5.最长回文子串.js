/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.45%)
 * Likes:    6290
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 3.6M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0];

  function expandCenter(left, right) {
    while (left > 0 && right < s.length - 1 && s[left] === s[right]) {
      left--;
      right++;
    }
    if (s[left] === s[right] && right - left + 1 > result.length) {
      result = s.substring(left, right + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandCenter(i, i);
    expandCenter(i, i + 1);
  }

  return result;
};
// @lc code=end

console.log(longestPalindrome("babad"));
