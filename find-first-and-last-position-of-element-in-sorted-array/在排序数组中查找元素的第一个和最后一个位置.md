# 在排序数组中查找元素的第一个和最后一个位置

2022/07/10

> <https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/>

## 示例

### 示例一

```text
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

### 示例二

```text
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

### 示例三

```text
输入：nums = [], target = 0
输出：[-1,-1]
```

## 思考过程

### 题解参考，二分查找

利用数组是升序排序的特性操作

```javascript
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};
```
