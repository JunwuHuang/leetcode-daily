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

var ret = addTwoNumbers([2, 4, 3], [5, 6, 4])
console.log(ret)

var ret = addTwoNumbers([0], [0])
console.log(ret)

var ret = addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])
console.log(ret)
