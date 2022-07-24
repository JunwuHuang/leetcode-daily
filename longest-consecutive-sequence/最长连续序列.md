# 最长连续序列

2022/07/24

> <https://leetcode.cn/problems/longest-consecutive-sequence/>

## 示例

### 示例一

```text
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

### 示例二

```text
输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
```

## 题解

### 哈希表

- 利用哈希表快速判断是否有连续的上一个或下一个元素

```javascript
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    let longestBreak = 0
    for (num of nums) {
        if (numsSet.has(num - 1)) {
            continue
        }
        let currentNum = num
        let currentLongestBreak = 1
        while (numsSet.has(currentNum + 1)) {
            currentNum += 1
            currentLongestBreak += 1
        }
        longestBreak = Math.max(longestBreak, currentLongestBreak)
    }
    return longestBreak
};
```
