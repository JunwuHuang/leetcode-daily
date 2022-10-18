# 汉明距离

2022/10/18

> <https://leetcode.cn/problems/hamming-distance/>

## 示例

### 示例一

```text
输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

### 示例二

```text
输入：x = 3, y = 1
输出：1
```

## 题解参考

[C/C++中\_\_builtin_popcount()的使用及原理](https://blog.csdn.net/github_38148039/article/details/109598368)

### 二分法

```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const popcount = (u) => {
    u = (u & 0x55555555) + ((u >> 1) & 0x55555555);
    u = (u & 0x33333333) + ((u >> 2) & 0x33333333);
    u = (u & 0x0f0f0f0f) + ((u >> 4) & 0x0f0f0f0f);
    u = (u & 0x00ff00ff) + ((u >> 8) & 0x00ff00ff);
    u = (u & 0x0000ffff) + ((u >> 16) & 0x0000ffff);
    return u;
  };
  return popcount(x ^ y);
};
```

### 末位清零

```javascript
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const popcount = (u) => {
    let ret = 0;
    while (u) {
      u = u & (u - 1);
      ret++;
    }
    return ret;
  };
  return popcount(x ^ y);
};
```
