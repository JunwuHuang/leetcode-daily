# 最长有效括号

2022/07/31

> <https://leetcode.cn/problems/longest-valid-parentheses/>

## 示例

### 示例一

```text
输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"
```

### 示例二

```text
输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"
```

### 示例三

```text
输入：s = ""
输出：0
```

## 题解参考

### 动态规划

[动态规划思路详解（c++）——32.最长有效括号](https://leetcode.cn/problems/longest-valid-parentheses/solution/dong-tai-gui-hua-si-lu-xiang-jie-c-by-zhanganan042/)

```javascript
 var longestValidParentheses = function (s) {
    const len = s.length
    let maxans = 0
    const dp = new Array(len).fill(0)
    for (let i = 1; i < len; i++) {
        if (s.charAt(i) === ')') {
            if (s.charAt(i - 1) === '(') {
                dp[i] = 2
                if (i >= 2) {
                    dp[i] += dp[i - 2]
                }
            } else {
                const expectMatchedIndex = i - dp[i - 1]
                if (expectMatchedIndex <= 0) {
                    continue
                }
                if (s.charAt(expectMatchedIndex - 1) === '(') {
                    dp[i] = dp[i - 1] + 2
                    if (expectMatchedIndex >= 2) {
                        dp[i] += dp[expectMatchedIndex - 2]
                    }
                }
            }
            maxans = Math.max(maxans, dp[i])
        }
    }
    return maxans
};
```
