# 合并两个有序链表

2022/08/10

> <https://leetcode.cn/problems/merge-two-sorted-lists/>

## 示例

### 示例一

```text
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

### 示例二

```text
输入：l1 = [], l2 = []
输出：[]
```

### 示例三

```text
输入：l1 = [], l2 = [0]
输出：[0]
```

## 题解参考

### 迭代

先建立一个哨兵节点，然后在两个链中去便利，只接入小的节点，迭代下去

```javascript
var mergeTwoLists = function (l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};
```
