/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var left = 0;
  var right = height.length - 1;
  var gs = 0;
  while (left < right) {
    var lh = height[left];
    var rh = height[right];
    var s = (right - left) * Math.min(lh, rh);
    gs = Math.max(gs, s);
    if (lh < rh) {
      left++;
    } else {
      right--;
    }
  }
  return gs;
};
// @lc code=end
