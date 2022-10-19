# 比特位计数

2022/10/19

> <https://leetcode.cn/problems/counting-bits/>

## 示例

### 示例一

```text
输入：n = 2
输出：[0,1,1]
解释：
0 --> 0
1 --> 1
2 --> 10
```

### 示例二

```text
输入：n = 5
输出：[0,1,1,2,1,2]
解释：
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

## 题解参考

### 末位清零

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const popcount = (x) => {
    let ret = 0;
    while (x > 0) {
      x = x & (x - 1);
      ret++;
    }
    return ret;
  };
  const r = [];
  for (let i = 0; i <= n; i++) {
    r.push(popcount(i));
  }
  return r;
};
```

### 动态规划-最低设置位

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i & (i - 1)] + 1
  }
  return bits
};
```
