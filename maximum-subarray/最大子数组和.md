# 最大子数组和

2022/08/02

> <https://leetcode.cn/problems/maximum-subarray/>

## 示例

### 示例一

```text
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

### 示例二

```text
输入：nums = [1]
输出：1
```

### 示例三

```text
输入：nums = [5,4,-1,7,8]
输出：23
```

## 题解参考

### 动态规划

关键字：连续、最大值

```javascript
var maxSubArray = function (nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};
```
