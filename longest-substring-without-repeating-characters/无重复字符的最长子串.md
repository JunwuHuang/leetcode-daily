# 无重复字符的最长子串

2022/05/24

> <https://leetcode.cn/problems/longest-substring-without-repeating-characters/>

## 示例

### 示例一

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

### 示例二

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

### 示例三

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是  "wke"，所以其长度为 3。
  请注意，你的答案必须是 子串 的长度，"pwke"  是一个子序列，不是子串。

## 思考过程

### 初步实现

1. 用 currentString 记录当前的不连续的字符串，用 maxLength 记录当前最长的不连续字符串的长度
2. 遍历原字符串 s，与 currentString 的每个字符比较，如果没有重复，则将该字符拼上去；否则裁剪 currentString

```javascript
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  var maxLength = 1;
  var currentString = s[0];
  for (var i = 1; i < s.length; i++) {
    for (var j = 0; j < currentString.length; j++) {
      if (s[i] === currentString[j]) {
        currentString = currentString.slice(j + 1);
        break;
      }
    }
    currentString += s[i];
    maxLength = Math.max(currentString.length, maxLength);
  }
  return maxLength;
};
```

### 利用 hashSet

官方题解利用了 es6 的 Set 对象

```javascript
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
```
