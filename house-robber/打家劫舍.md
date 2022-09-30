# 打家劫舍

2022/09/30

> <https://leetcode.cn/problems/house-robber/>

## 示例

### 示例一

```text
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

### 示例二

```text
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

## 题解参考

### 动态规划

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return nums[0];
  }
  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[n - 1];
};
```

### 滚动数组

```javascript
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return nums[0];
  }
  let first = nums[0];
  let second = Math.max(first, nums[1]);

  for (let i = 2; i < n; i++) {
    const temp = second;
    second = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    first = temp;
  }

  return second;
};
```
