# 爬楼梯

2022/08/10

> <https://leetcode.cn/problems/climbing-stairs/>

## 示例

### 示例一

```text
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

### 示例二

```text
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

## 题解参考

### 动态规划

f(x) = f(x - 1) + f(x - 2)

```javascript
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
```

### 通向公式

推导公式见官方题解

```javascript
var climbStairs = function (n) {
  const sqrt5 = Math.sqrt(5);
  const fibn =
    Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
};
```
