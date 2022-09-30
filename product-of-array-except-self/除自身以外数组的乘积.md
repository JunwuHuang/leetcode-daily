# 除自身以外数组的乘积

2022/09/30

> <https://leetcode.cn/problems/product-of-array-except-self/>

## 示例

### 示例一

```text
输入: nums = [1,2,3,4]
输出: [24,12,8,6]
```

### 示例二

```text
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
```

## 题解参考

### 空间复杂度 O(1)O(1) 的方法

```typescript
var productExceptSelf = function (nums: number[]): number[] {
  const length = nums.length;
  const answer = new Array<number>(length);

  // answer[i] 表示索引 i 左侧所有元素的乘积
  // 因为索引为 '0' 的元素左侧没有元素， 所以 answer[0] = 1
  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  // R 为右侧所有元素的乘积
  // 刚开始右边没有元素，所以 R = 1
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
    answer[i] = answer[i] * R;
    // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
    R *= nums[i];
  }
  return answer;
};
```
