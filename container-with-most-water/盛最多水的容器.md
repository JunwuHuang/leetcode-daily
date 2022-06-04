# 盛最多水的容器

2022/06/04

> <https://leetcode.cn/problems/container-with-most-water/>

## 示例

### 示例一

输入：[1,8,6,2,5,4,8,3,7]
输出：49
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为  49。

### 示例二

输入：height = [1,1]
输出：1

## 思考过程

这道题完全没有头绪，看看题解尝试理解一下

### 双指针

[盛最多水的容器（双指针，清晰图解）](https://leetcode.cn/problems/container-with-most-water/solution/container-with-most-water-shuang-zhi-zhen-fa-yi-do/)

```javascript
/**
 * 使用双指针，头尾相遇时可算出最大的面积，i代表从头开始的指针，j代表从尾部开始的指针
 * 假设当height[i] < height[j]时，此时面积为(j - i) * height[i]
 * 若将 i 向后移
 *    
      若height[i + 1] > height[i], 则面积变大
      (j - (i + 1)) * height[i + 1]

      因为height[j] > height[i], 所以面积变大
      (j - (i + 1)) * height[j]
 * 若将 j 向后移
      若height[j - 1] > height[i]，则面积变大
      (j - 1 - i) * height[j - 1]

      面积变小
      (j - 1 - i) * height[i]
 * 上述场景举例帮助我理解了，当双指针移动的时候只选择将短板靠内移动时，最大面积不会丢失
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max(max, height[i] * (j - i));
      i++;
    } else {
      max = Math.max(max, height[j] * (j - i));
      j--;
    }
  }
  return max;
};
```
