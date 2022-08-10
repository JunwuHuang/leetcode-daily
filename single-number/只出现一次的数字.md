# 只出现一次的数字

2022/08/10

> <https://leetcode.cn/problems/single-number/>

## 示例

### 示例一

```text
输入: [2,2,1]
输出: 1
```

### 示例二

```text
输入: [4,1,2,1,2]
输出: 4
```

## 题解参考

### 位运算

0 按位异或 n 会等于 n

n 按位异或 n 会等于0

```javascript
var singleNumber = function (nums) {
  let r = 0;
  for (num of nums) {
    r ^= num;
  }
  return r;
};
```
