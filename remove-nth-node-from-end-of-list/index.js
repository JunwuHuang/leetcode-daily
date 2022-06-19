function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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