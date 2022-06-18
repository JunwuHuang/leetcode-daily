# 括号生成

2022/06/18

> <https://leetcode.cn/problems/generate-parentheses/>

## 示例

### 示例一

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]

### 示例二

输入：n = 1
输出：["()"]

## 思考过程

### 题解参考，回溯

1. 先把左括号都放上去，再放右括号，组装完成就把答案拿出来
1. 把右括号都去掉，再去掉最后一个左括号，接着开始拼跟左括号对应的右括号，拼完再补上刚去掉的左括号，并补上对应的右括号

```javascript
var generateParenthesis = function (n) {
  const ans = []

  const backtrack = (ans, cur, open, close, max) => {
    if (cur.length === max * 2) {
      ans.push(cur.join(''))
      return
    }
    if (open < max) {
      cur.push('(')
      backtrack(ans, cur, open + 1, close, max)
      cur.pop()
    }
    if (close < open) {
      cur.push(')')
      backtrack(ans, cur, open, close + 1, max)
      cur.pop()
    }
  }

  backtrack(ans, [], 0, 0, n)

  return ans
};
```
