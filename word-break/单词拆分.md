# 单词拆分

2022/09/24

> <https://leetcode.cn/problems/word-break/>

## 示例

### 示例一

```text
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
```

### 示例二

```text
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
```

### 示例三

```text
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
```

## 题解

### 动态规划

```javascript
var wordBreak = function(s, wordDict) {
    const length = s.length
    const set = new Set(wordDict)
    const dp = new Array(length + 1).fill(false)

    dp[0] = true

    for (let i = 1; i <= length; i ++) {
        for (let j = 0; j < i; j ++) {
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true
                break
            }
        }
    }

    return dp[length]
};
```

### 排列组合

从起点到终点一共需要向下移动 m - 1 次，向右移动 n - 1 次；因此路径的总数，等于从 m + n - 2 次移动中选择 m - 1 次向下移动的方案数

```javascript
var uniquePaths = function(m, n) {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};
```
