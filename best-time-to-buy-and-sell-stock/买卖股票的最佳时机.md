# 买卖股票的最佳时机

2022/08/02

> <https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/>

## 示例

### 示例一

```text
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

### 示例二

```text
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

## 题解参考

### 一次遍历

先找到最小的股价；
需要注意的是，只能先买后卖，所以遍历的时候还是先找最小的股价

```javascript
var maxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for (let i = 0; i < prices.length; i ++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};
```
