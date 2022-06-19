# 删除链表的倒数第 N 个结点

2022/06/19

> <https://leetcode.cn/problems/remove-nth-node-from-end-of-list/>

## 示例

### 示例一

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

### 示例二

输入：head = [1], n = 1
输出：[]

### 示例三

输入：head = [1,2], n = 1
输出：[1]

## 思考过程

### 初步尝试

1. 遍历链表以获取长度
1. 重新遍历链表，找到我们要删除的节点 length-n + 1
1. 将目标节点的后置节点接到它的前驱节点即可

> 初步实现的时候没有考虑到拷贝的引用地址会指向同一个链表，所以一直有问题，后续参考题解才明白了

```javascript
var removeNthFromEnd = function(head, n) {
    let length = 0
    let temp = head
    while (temp) {
        temp = temp.next
        length++
    }
    if (length === n) {
        head.next = null
        return head
    }
    temp = head
    while(length -n > 1) {
        temp=temp.next
        n ++
    }
    if (temp.next) {
        temp.next = temp.next.next
    }
    
    return head
};
```

### 题解参考

```javascript
var removeNthFromEnd = function (head, n) {
    const dummy = new ListNode(0, head)

    // 获取链表的长度
    let length = 0
    while (head !== null) {
        length++
        head = head.next
    }

    let currentNode = dummy
    for (let i = 0; i < length - n; i++) {
        currentNode = currentNode.next
    }
    // 将要删除的目标节点的后置节点接到前驱节点上
    currentNode.next = currentNode.next.next

    return dummy.next
};
```
