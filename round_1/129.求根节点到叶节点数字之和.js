/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0
  let res = 0
  function helper(node, str) {
    str += String(node.val)
    if (!node.left && !node.right) return res += Number(str)
    if (node.left) {
      helper(node.left, str)
    }
    if (node.right) {
      helper(node.right, str)
    }
  }
  helper(root, '')
  return res
};
// @lc code=end
