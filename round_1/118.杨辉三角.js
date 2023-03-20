/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    const row = Array(i)
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1
      } else {
        row[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
    res.push(row)
  }
  return res
};
// @lc code=end

