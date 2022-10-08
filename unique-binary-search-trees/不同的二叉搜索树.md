# 不同的二叉搜索树

2022/10/08

> <https://leetcode.cn/problems/unique-binary-search-trees/>

## 示例

### 示例一

```text
输入：n = 3
输出：5
```

### 示例二

```text
输入：n = 1
输出：1
```

## 题解

### 动态规划

```javascript
var numTrees = function(n) {
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};
```

### 数学

```javascript
var numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
```
