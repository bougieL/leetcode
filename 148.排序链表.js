/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  let res = new ListNode()
  let minPrev = null
  let min = Number.POSITIVE_INFINITY
  let temp = head
  while (temp) {
    if (temp.val < min) {
      
    }
    temp = temp.next
  }


  return res
};
// @lc code=end

