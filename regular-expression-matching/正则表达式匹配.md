# 正则表达式匹配

2022/07/31

> <https://leetcode.cn/problems/regular-expression-matching/>

## 示例

### 示例一

```text
输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
```

### 示例二

```text
输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

### 示例三

```text
输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

## 题解参考

### 动态规划

[动态规划 - 从 0 讲解，大白话好理解](https://leetcode.cn/problems/regular-expression-matching/solution/dong-tai-gui-hua-zen-yao-cong-0kai-shi-si-kao-da-b/)

```javascript
 var isMatch = function(s, p) {
    const m = s.length
    const n = p.length

    const dp = [[true]]

    for (let i = 0; i <= m; ++i) {
        if (!Array.isArray(dp[i])) {
            dp[i] = []
        }
        for (let j = 1; j <= n; ++j) {
            if (p.charAt(j - 1) === '*') {
                dp[i][j] = dp[i][j - 2]
                if (matches(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]
                }
            } else {
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j - 1]
                }
            }
        }
    }
    return !!dp[m][n]
};

function matches(s, p, i, j) {
    if (i === 0) {
        return false
    }
    if (p.charAt(j - 1) === '.') {
        return true
    }
    return s.charAt(i - 1) === p.charAt(j - 1)
}
```
