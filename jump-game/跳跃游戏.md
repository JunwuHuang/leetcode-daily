# 跳跃游戏

2022/08/15

> <https://leetcode.cn/problems/jump-game/>

## 示例

### 示例一

```text
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
```

### 示例二

```text
输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
```

## 题解参考

### 贪心

1. 记录当前能到达最远的位置
1. 遍历数组，在能到达的位置范围内，是否可以跳到终点，

- 如果可以则返回`true`
- 如果不行则再记录最新的最远可达距离

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  let rightmax = 0;
  for (let i = 0; i < n; i++) {
    if (i <= rightmax) {
      rightmax = Math.max(rightmax, i + nums[i]);
      if (rightmax >= n - 1) {
        return true;
      }
    }
  }
  return false;
};
```
