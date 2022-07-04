# 子集

2022/07/03

> <https://leetcode.cn/problems/subsets/>

## 示例

### 示例一

```text
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### 示例二

```text
输入：nums = [0]
输出：[[],[0]]
```

## 题解

### 递归法

```javascript
var subsets = function(nums) {
    const t = [];
    const ans = [];
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);

        // 清理t后，开始下一轮组合
        t.pop(t.length - 1);
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
};
```
