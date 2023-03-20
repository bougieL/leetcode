/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var fib = function(n) {
//   const dp = Array(n).fill()
//   dp[0] = 0
//   dp[1] = 1
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }
//   return dp[n]
// };

function fib(n, n1 = 0, n2 = 1) {
  if (n == 0) {
    return n1;
  }
  return fib(n - 1, n2, n1 + n2);
}
// @lc code=end
