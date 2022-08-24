# 最小路径和

2022/08/24

> <https://leetcode.cn/problems/minimum-path-sum/>

## 示例

### 示例一

```text
输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
```

### 示例二

```text
输入：grid = [[1,2,3],[4,5,6]]
输出：12
```

## 题解

### 动态规划

1. 算出 x 轴和 y 轴的第一步
2. 遍历二维数组，累加较小的结果

```javascript
var minPathSum = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = new Array(rows);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(columns);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
};
```
