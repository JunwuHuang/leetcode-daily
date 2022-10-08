# 二叉树的中序遍历

2022/10/08

> <https://leetcode.cn/problems/binary-tree-inorder-traversal/>

## 示例

### 示例一

```text
输入：root = [1,null,2,3]
输出：[1,3,2]
```

### 示例二

```text
输入：root = []
输出：[]
```

### 示例三

```text
输入：root = [1]
输出：[1]
```

## 题解

### 递归

```javascript
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
```

### 迭代

```javascript
var inorderTraversal = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
```
