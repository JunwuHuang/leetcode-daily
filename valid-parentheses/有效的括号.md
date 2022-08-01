# 有效的括号

2022/08/01

> <https://leetcode.cn/problems/valid-parentheses/>

## 示例

### 示例一

```text
输入：s = "()"
输出：true
```

### 示例二

```text
输入：s = "()[]{}"
输出：true
```

### 示例三

```text
输入：s = "(]"
输出：false
```

### 示例四

```text
输入：s = "([)]"
输出：false
```

### 示例五

```text
输入：s = "{[]}"
输出：true
```

## 题解参考

### 栈

```javascript
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];
  for (let char of s) {
    if (pairs.has(char)) {
      if (!stack.length || stack[stack.length - 1] !== pairs.get(char)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return !stack.length
};
```
