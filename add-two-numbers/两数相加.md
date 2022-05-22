# 两数相加

2022/05/22

> <https://leetcode.cn/problems/add-two-numbers/>

## 示例

### 示例一

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

### 示例二

输入：l1 = [0], l2 = [0]
输出：[0]

### 示例三

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

## 思考过程

### 初步实现

1. 用一个head记录当前的位置（个位、十位、百位）
2. 另外再用一个变量carry记录两数相加是否需要进一
3. 两数相加，同一个位置上的两数相加，如果有进位，则将相加结果减去10再塞到数组里

```javascript
var addTwoNumbers = function (l1, l2) {
    var head = 0
    var result = []
    var carry = false
    while (head < l1.length || head < l2.length) {
        var sum = (l1[head] || 0) + (l2[head] || 0)
        if (carry) {
            sum += 1
            carry = false
        }
        if (sum >= 10) {
            carry = true
            sum -= 10
        }
        result.push(sum)
        head += 1
    }
    if (carry) {
        result.push(1)
    }
    return result
};
```

### ListNode是什么

ListNode是对于链表的实现，1 -> 2 -> 3

用上述代码提交会报错，因为没有使用这个链表结构，调整一下代码

### 调整后的代码

调整的过程中，由于对ListNode的结构不熟悉，屡屡碰壁，大致就是要利用head指针去操作next

```javascript
var addTwoNumbers = function (l1, l2) {
    var n1 = l1
    var n2 = l2
    var carry = false
    var result
    var head
    while (n1 !== null || n2 !== null) {
        var sum = (n1 ? n1.val : 0) + (n2 ? n2.val : 0)
        if (carry) {
            sum += 1
            carry = false
        }
        if (sum >= 10) {
            carry = true
            sum -= 10
        }
        if (head) {
            head.next = new ListNode(sum)
            head = head.next
        } else {
            head = result = new ListNode(sum)
        }
        n1 = n1 ? n1.next : n1
        n2 = n2 ? n2.next : n2
    }
    if (carry) {
        head.next = new ListNode(1)
    }
    return result
};
```
