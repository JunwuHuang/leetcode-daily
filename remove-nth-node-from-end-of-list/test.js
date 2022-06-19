var removeNthFromEnd = function (head, n) {
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
    while (length - n > 1) {
        temp = temp.next
        n++
    }
    if (temp.next) {
        temp.next = temp.next.next
    }

    return head
};
