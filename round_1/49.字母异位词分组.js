/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var res = new Map()

  for (const item of strs) {
    var key = item.split('').sort().join('')
    if (!res.has(key)) {
      res.set(key, [item])
    } else {
      res.get(key).push(item)
    }
  }

  return Array.from(res.values())
};
// @lc code=end
