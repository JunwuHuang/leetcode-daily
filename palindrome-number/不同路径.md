# 回文数

2022/08/22

> <https://leetcode.cn/problems/palindrome-number/>

## 示例

### 示例一

```text
输入：x = 121
输出：true
```

### 示例二

```text
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

### 示例三

```text
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

## 题解

### 双指针

将x转成字符串，然后从两头判断是否相等，若不相等说明不是回文串

```javascript
var isPalindrome = function (x) {
  x = String(x);
  let head = 0;
  let tail = x.length - 1;
  while (head < tail) {
    if (x.charAt(head) === x.charAt(tail)) {
      head++;
      tail--;
      continue;
    }
    return false;
  }
  return true;
};
```
