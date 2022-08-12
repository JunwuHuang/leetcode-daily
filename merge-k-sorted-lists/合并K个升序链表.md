# 合并 K 个升序链表

2022/08/12

> <https://leetcode.cn/problems/merge-k-sorted-lists/>

## 示例

### 示例一

```text
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

### 示例二

```text
输入：lists = []
输出：[]
```

### 示例三

```text
输入：lists = [[]]
输出：[]
```

## 题解参考

该题的基础是合并两个有序链表：
https://leetcode.cn/problems/merge-two-sorted-lists

### 分治合并

相比顺序合并，时间复杂度有提升。将链表先两两合并，后再将合并后的链表再递归；

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

var merge = function (lists, left, right) {
  if (left === right) return lists[left];
  if (left > right) return null;
  const mid = (left + right) >> 1;
  return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
};

var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);
};
```
