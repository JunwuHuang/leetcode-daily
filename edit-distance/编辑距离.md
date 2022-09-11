# 编辑距离

2022/09/11

> <https://leetcode.cn/problems/edit-distance/>

## 示例

### 示例一

```text
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

### 示例二

```text
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```

## 题解参考

### 动态规划

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;
  if (n * m === 0) {
    return n + m;
  }
  const dp = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    if (!dp[i]) {
      dp[i] = new Array(m + 1);
    }
    dp[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = dp[i - 1][j] + 1;
      let down = dp[i][j - 1] + 1;
      let left_down = dp[i - 1][j - 1];
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        left_down += 1;
      }
      dp[i][j] = Math.min(left, Math.min(down, left_down));
    }
  }
  return dp[n][m];
};
```
