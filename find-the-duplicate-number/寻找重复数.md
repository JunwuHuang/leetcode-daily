# 寻找重复数

2022/10/18

> <https://leetcode.cn/problems/find-the-duplicate-number/>

## 示例

### 示例一

```text
输入：nums = [1,3,4,2,2]
输出：2
```

### 示例二

```text
输入：nums = [3,1,3,4,2]
输出：3
```

## 题解参考

### 快慢指针

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0
  let fast = 0
  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)
  slow = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }
  return slow
};
```
