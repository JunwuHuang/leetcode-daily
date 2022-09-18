# 柱状图中最大的矩形

2022/09/18

> <https://leetcode.cn/problems/largest-rectangle-in-histogram/>

## 示例

### 示例一

```text
输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
```

### 示例二

```text
输入： heights = [2,4]
输出： 4
```

## 题解

<https://leetcode.cn/problems/largest-rectangle-in-histogram/solution/jsjie-ti-si-lu-qing-xi-ming-liao-by-inte-e4lj/>

### 栈顶法

```javascript
var largestRectangleArea = function(heights) {
    let large = 0;
    let shift = [{ index: -1, height: -1 }];
    for(let i = 0; i < heights.length; i++) {
        // 队列中最后一个元素为非初始化元素
       while(shift[shift.length - 1].height !== -1 && shift[shift.length - 1].height > heights[i]) {
           const pop = shift.pop();
           large = Math.max(large, pop.height * (i - 1 - shift[shift.length - 1].index) );
       }
       shift.push({ index: i,height: heights[i] });
    }
    const top = shift[shift.length - 1].index;
    
    while(shift[shift.length - 1].height !== -1) {
        const pop = shift.pop();
        large = Math.max(large, pop.height * (top - shift[shift.length - 1].index));
    }
    return large
};
```
