# 不同路径

2022/08/22

> <https://leetcode.cn/problems/unique-paths/>

## 示例

### 示例一

```text
输入：m = 3, n = 7
输出：28
```

### 示例二

```text
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
```

### 示例三

```text
输入：m = 7, n = 3
输出：28
```

### 示例四

```text
输入：m = 3, n = 3
输出：6
```

## 题解

### 动态规划

```javascript
var uniquePaths = function (m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
      f[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
      f[0][j] = 1
  }
  for (let i = 1; i < m; i++) {

    for (let j = 1; j < n; j++) {
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
```

### 排列组合

从起点到终点一共需要向下移动 m - 1 次，向右移动 n - 1 次；因此路径的总数，等于从 m + n - 2 次移动中选择 m - 1 次向下移动的方案数

```javascript
var uniquePaths = function(m, n) {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};
```