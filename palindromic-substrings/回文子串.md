# 回文子串

2022/10/08

> <https://leetcode.cn/problems/palindromic-substrings/>

## 示例

### 示例一

```text
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
```

### 示例二

```text
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

## 题解

### 中心扩展

```javascript
var countSubstrings = function (s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= 1; j++) {
      let l = i
      let r = i + j
      while (l >= 0 && r < n && s.chartAt(l--) === s.chartAt(r++)) {
        ans++
      }
    }
  }
  return ans;
};
```
