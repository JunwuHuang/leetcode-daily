function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function reverse(nums, start) {
    let left = start, right = nums.length - 1
    while (left < right) {
        swap(nums, left, right)
        left++
        right--
    }
}

function nextPermutation(nums) {
    let i = nums.length - 2

    // 从右往左找不满足降序数列的数字索引
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    // 如果找到了，再从右往左找大于nums[i]的数字索引
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[i] >= nums[j]) {
            j--
        }
        // 找到了，交换i和j的位置
        swap(nums, i, j)
    }
    // 开始反转i后面的排列，即可得出下一个排列F
    reverse(nums, i + 1)
}