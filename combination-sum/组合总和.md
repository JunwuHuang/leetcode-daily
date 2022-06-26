# 组合总和

2022/06/26

> <https://leetcode.cn/problems/combination-sum/>

## 示例

### 示例一

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。

### 示例二

输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]

### 示例三

输入: candidates = [2], target = 1
输出: []

## 思考过程

### 题解参考，回溯

```javascript
var combinationSum = function (candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
};
```
