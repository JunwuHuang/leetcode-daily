# 合并区间

2022/08/15

> <https://leetcode.cn/problems/merge-intervals/>

## 示例

### 示例一

```text
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

### 示例二

```text
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

## 题解参考

### 排序

将数组以左端点进行排序，相同的左端点元组必定能合并

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ret = [];
  for (let i = 0; i < intervals.length; i++) {
    const [L, R] = intervals[i];
    if (ret.length === 0 || ret[ret.length - 1][1] < L) {
      ret.push([L, R]);
      continue;
    }
    ret[ret.length - 1][1] = Math.max(ret[ret.length - 1][1], R);
  }
  return ret;
};

```
