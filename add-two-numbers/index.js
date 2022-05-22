function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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

// var l1 = new ListNode(2)
// l1.next = new ListNode(4)
// l1.next.next = new ListNode(3)

// var l2 = new ListNode(5)
// l2.next = new ListNode(6)
// l2.next.next = new ListNode(4)

// var ret = addTwoNumbers(l1, l2)
// console.log(ret)

var l1 = new ListNode(9)
l1.next = new ListNode(9)
l1.next.next = new ListNode(9)
l1.next.next.next = new ListNode(9)
l1.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next.next = new ListNode(9)

var l2 = new ListNode(9)
l2.next = new ListNode(9)
l2.next.next = new ListNode(9)
l2.next.next.next = new ListNode(9)

var ret = addTwoNumbers(l1, l2)
console.log(ret)
