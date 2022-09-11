# 最小覆盖子串

2022/09/11

> <https://leetcode.cn/problems/minimum-window-substring/>

## 示例

### 示例一

```text
输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
```

### 示例二

```text
输入：s = "a", t = "a"
输出："a"
```

### 示例三

```text
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
```

## 题解

### 滑动窗口

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const ori = {};
  const cnt = {};

  const check = () => {
    for (const key in ori) {
      if (~~cnt[key] < ori[key]) {
        return false;
      }
    }
    return true;
  };

  const tLen = t.length;
  for (let i = 0; i < tLen; i++) {
    const c = t[i];
    ori[c] = ~~ori[c] + 1;
  }

  let l = 0,
    r = -1;
  let len = Number.MAX_SAFE_INTEGER;
  let ansL = -1,
    ansR = -1;
  const sLen = s.length;
  while (r < sLen) {
    r += 1;
    const c = s[r];
    if (r < sLen && ori[c]) {
      cnt[c] = ~~cnt[c] + 1;
    }
    while (check() && l <= r) {
      if (r - l + 1 < len) {
        len = r - l + 1;
        ansL = l;
        ansR = l + len;
      }
      const char = s[l];
      if (ori[char]) {
        cnt[char] = ~~cnt[char] - 1;
      }
      l += 1;
    }
  }
  return ansL === -1 ? "" : s.substring(ansL, ansR);
};
```
