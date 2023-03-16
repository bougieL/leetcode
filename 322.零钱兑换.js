/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  coins = coins.sort((a, b) => a - b);
  if (amount < coins[0]) return -1;
  let n = Number.POSITIVE_INFINITY;

  function helper(coins, added, count) {
    if (coins.length === 0) return;
    const value = added + coins[coins.length - 1];
    if (value === amount) {
      count = count + 1;
      if (count < n) {
        n = count;
        return;
      }
    } else if (value > amount) {
      helper(coins.slice(0, coins.length - 1), added, count);
    } else {
      for (let i = coins.length; i > 0; i--) {
        helper(coins.slice(0, i), value, count + 1);
      }
    }
  }

  helper(coins, 0, 0);

  return n === Number.POSITIVE_INFINITY ? -1 : n;
};
// @lc code=end

console.log(
  coinChange([411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422], 9864)
);
