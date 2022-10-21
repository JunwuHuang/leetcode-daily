# 翻转二叉树

2022/10/21

> <https://leetcode.cn/problems/invert-binary-tree/>

## 示例

### 示例一

```text
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

### 示例二

```text
输入：root = [2,1,3]
输出：[2,3,1]
```

### 示例三

```text
输入：root = []
输出：[]
```

## 题解

### 递归法

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const swap = (node) => {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    node.left && swap(node.left);
    node.right && swap(node.right);
  };
  root && swap(root);
  return root;
};
```
