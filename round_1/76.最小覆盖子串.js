/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s === t) return s
  if (!s) return ''
  if (t.length > s.length) return ''

  function contain(a, b) {
    return b.split("").every((c) => {
      const includes = a.includes(c);
      a = a.replace(c, "");
      return includes;
    })
  }

  for (let w = t.length; w <= s.length; w++) {
    for (let i = 0; i <= s.length - w; i++) {
      let str = s.slice(i, i + w);
      if (contain(str, t)) {
        return str;
      }
    }
  }
  return "";
};
// @lc code=end

function contain(a, b) {
  return b.split("").every((c) => {
    const includes = a.includes(c);
    a = a.replace(c, "");
    return includes;
  })
}

console.log(contain('BANC', 'ABC'))