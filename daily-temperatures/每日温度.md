# 每日温度

2022/10/18

> <https://leetcode.cn/problems/daily-temperatures/>

## 示例

### 示例一

```text
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

### 示例二

```text
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```

### 示例二

```text
输入: temperatures = [30,60,90]
输出: [1,1,0]
```

## 题解参考

### 单调栈

```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const answer = new Array(len).fill(0);
  const stack = [];
  for (let i = 0; i < len; i++) {
    const temperature = temperatures[i];
    while (
      stack.length &&
      temperature > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return answer;
};
```
