/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//   var res = []
//   function recur(root) {
//     if (!root) return
//     recur(root.left)
//     res.push(root.val)
//     recur(root.right)
//   }
//   recur(root)
//   return res
// };

var inorderTraversal = function(root) {
  var res = []
  var stack = []

  while(root) {
    stack.push(root)
    root = root.left
  }

  while(stack.length > 0) {
    var node = stack.pop()
    res.push(node.val)
    node = node.right
    while(node) {
      stack.push(node)
      node = node.left
    }
  }

  return res
};
// @lc code=end

