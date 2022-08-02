# 接雨水

2022/08/02

> <https://leetcode.cn/problems/trapping-rain-water/>

## 示例

### 示例一

```text
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）
```

### 示例二

```text
输入：height = [4,2,0,3,2,5]
输出：9
```

## 题解参考

### 双指针

左右一起往中间走，如果出现高度差，则将雨水面积累加起来

```javascript
var trap = function (height) {
    let ans = 0;
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            ++left;
        } else {
            ans += rightMax - height[right];
            --right;
        }
    }
    return ans;
};
```
