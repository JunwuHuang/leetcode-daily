# 全排列

2022/07/03

> <https://leetcode.cn/problems/permutations/>

## 示例

### 示例一

```text
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### 示例二

```text
输入：nums = [0,1]
输出：[[0,1],[1,0]]
```

### 示例三

```text
输入：nums = [1]
输出：[[1]]
```

## 题解

### 递归法

```javascript
function swap(nums, i, j) {
    const temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
}

function backtrack(n, output, res, first) {
    if (first === n) {
        // 这里不能只是把output的引用塞进去，需要copy一份
        res.push(output.slice())
    }
    for (let i = first; i < n; i++) {
        // 交换first和i的位置
        swap(output, first, i)
        backtrack(n, output, res, first + 1)
        // 撤销操作
        swap(output, first, i)
    }
}

var permute = function (nums) {
    const res = []

    const output = nums.slice()

    const n = nums.length
    backtrack(n, output, res, 0)
    return res
};
```
