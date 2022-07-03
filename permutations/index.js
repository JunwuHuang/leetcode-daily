function swap(nums, i, j) {
    const temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp
}

function backtrack(n, output, res, first) {
    if (first === n) {
        // 这里不能只是把output的引用塞进去，需要copy一份
        res.push(output.slice())
    }
    for (let i = first; i < n; i++) {
        // 交换first和i的位置
        swap(output, first, i)
        backtrack(n, output, res, first + 1)
        // 撤销操作
        swap(output, first, i)
    }
}

var permute = function (nums) {
    const res = []

    const output = nums.slice()

    const n = nums.length
    backtrack(n, output, res, 0)
    return res
};