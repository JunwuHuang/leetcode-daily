function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var foo = new ListNode(1)

console.dir(foo)

foo.next = new ListNode(2)

console.dir(foo)

foo.next = new ListNode(3)

console.dir(foo)
