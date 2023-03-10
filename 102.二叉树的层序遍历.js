/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = [];
  function recur(node, depth) {
    if (!node) return;
    if (!res[depth]) {
      res[depth] = [node.val];
    } else {
      res[depth].push(node.val);
    }
    recur(node.left, depth + 1);
    recur(node.right, depth + 1);
  }
  recur(root, 0);
  return res;
};
// @lc code=end
