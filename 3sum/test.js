var threeSum = function (nums) {
    const n = nums.length
    // 先对数组进行排序方便后续操作的时候排除重复的因素
    nums = nums.sort((a, b) => a - b)
    // 用于存放所有答案的数组，答案是数组，所以这会是一个二维数组
    const ans = []
    // 头指针，遍历出答案的第一个数字a
    for (let first = 0; first < n; first++) {
        // 由于题解不能重复，所以当第一个数字重复时则可跳过
        if (first > 0 && nums[first] === nums[first - 1]) {
            continue
        }
        // 尾指针，用于找出答案的第三个数字c
        let third = n - 1
        // 将a的取反作为b与c的两数之和
        let target = -nums[first]
        // 中间指针，遍历出答案的第二个数字b，在这个过程中也会找出数字c
        for (let second = first + 1; second < n; second++) {

            // 类似判断在上面出现过，由于题解不能重复，所以跳过
            if (second > first + 1 && nums[second] === nums[second - 1]) {
                continue
            }

            // 数组已经过排序，若b、c之和大于target，则应该将c再往前指
            while (second < third && nums[second] + nums[third] > target) {
                --third
            }

            // 指针重合了，退出循环
            if (second === third) {
                break
            }

            // 找到题解了，将题解放入ans中
            if (nums[second] + nums[third] === target) {
                ans.push([nums[first], nums[second], nums[third]])
            }
        }
    }
    return ans
};

var ret = threeSum([-1, 0, 1, 2, -1, -4])
console.dir(ret)

var ret = threeSum([])
console.dir(ret)

var ret = threeSum([0])
console.dir(ret)