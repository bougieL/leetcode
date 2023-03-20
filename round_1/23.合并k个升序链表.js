/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  var pos = 0
  var min = Number.POSITIVE_INFINITY
  var minNode = null
  for (var i = 0; i < lists.length; i++) {
    var item = lists[i]
    if (item && item.val < min) {
      minNode = item
      min = item.val
      pos = i
    }
  }
  if (minNode) {
    lists[pos] = minNode.next
  } else {
    delete lists[pos]
  }
  if (minNode) {
    minNode.next = mergeKLists(lists)
  }
  return minNode
};
// @lc code=end

