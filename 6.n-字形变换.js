/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  var g = numRows * 2 - 2;
  var e = Array(numRows).fill("");
  for (let i = 0; i < s.length; i = i + g) {
    var p = s.slice(i, i + g);
    // console.log(p)
    for (let j = 0; j < numRows; j++) {
      if (j === 0 || (j === numRows - 1 && p[j])) {
        e[j] = e[j] + p[j];
      } else {
        var s1 = (p[j] || "") + (p[g - j] || "");
        e[j] = e[j] + s1;
      }
    }
  }
  return e.join("");
};
// @lc code=end
