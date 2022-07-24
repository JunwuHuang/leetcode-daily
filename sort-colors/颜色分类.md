# 颜色分类

2022/07/24

> <https://leetcode.cn/problems/sort-colors/>

## 示例

### 示例一

```text
输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
```

### 示例二

```text
输入：nums = [2,0,1]
输出：[0,1,2]
```

## 题解

### 双指针

- 用head指针记录前面连续的最后一个0的位置
- 用tail指针记录后面连续的第一个2的位置
- 遍历数组，找到0就与head交换元素；找到2就与tail交换元素；
- 以上，如果找到1的话，则位置就会不变，导致1的位置有可能有误；
- 如果找到2了，则需要一直往回找不是2的元素去交换位置，确保所有的2都在最后面；

```javascript
var swap = function (a, b, nums) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

var sortColors = function (nums) {
  const len = nums.length;
  let head = 0;
  let tail = len - 1;
  for (let i = 0; i <= tail; i++) {
    while (nums[i] === 2 && i <= tail) {
      swap(i, tail, nums);
      tail -= 1;
    }
    if (nums[i] === 0) {
      swap(i, head, nums);
      head += 1
    }
  }
};
```
