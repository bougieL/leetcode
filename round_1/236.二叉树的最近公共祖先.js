/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {};
// @lc code=end

function inorderTree(root) {
  const res = [];
  const stack = [];
  while (root) {
    stack.push(root.val);
    root = root.left;
  }
  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);
    node = node.right;
    while (node) {
      stack.push(node);
      node = node.right;
    }
  }
}
