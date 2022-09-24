# 最小栈

2022/09/24

> <https://leetcode.cn/problems/min-stack/>

## 示例

### 示例一

```text
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

## 题解

### 辅助栈

```javascript
var MinStack = function() {
    this.stack = []
    this.sortedStack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    this.sortedStack.push(Math.min(this.sortedStack[this.sortedStack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.sortedStack.pop()
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortedStack[this.sortedStack.length - 1]
};
```
