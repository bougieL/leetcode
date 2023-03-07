/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var j = 0;
  var r1;
  var r2;
  while (l1 || l2 || j) {
    var newNode = new ListNode();
    if (r2) r2.next = newNode;
    var s = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + j;
    j = s > 9 ? 1 : 0;
    newNode.val = s % 10;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if (!r1) r1 = newNode;
    r2 = newNode;
  }
  return r1;
};
// @lc code=end
