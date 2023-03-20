/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  let _depth = 0
  function recur(node, depth) {
    if (!node) return
    _depth = Math.max(depth, _depth)
    if (node.left || node.right) {
      recur(node.left, depth + 1)
      recur(node.right, depth + 1)
    }
  }
  recur(root, 1)
  return _depth
};
// @lc code=end
