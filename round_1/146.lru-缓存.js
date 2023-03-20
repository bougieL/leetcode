/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/** use Map
 * get Map first key -> map.keys().next().value or Array.from(map.keys())[0]
 * @param {number} capacity
 */
// var LRUCache = function (capacity) {};

/**
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function (key) {};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function (key, value) {};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Map();
  }
  get(key) {
    if (this.data.has(key)) {
      const val = this.data.get(key);
      this.data.delete(key);
      this.data.set(key, val);
      return val;
    }
    return -1;
  }
  put(key, value) {
    if (this.data.size === this.capacity) {
      this.data.delete(this.data.keys().next().value);
    }
    this.data.set(key, value);
  }
}
// @lc code=end
