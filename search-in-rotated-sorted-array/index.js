/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length
    if (n === 0) {
        return -1
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1
    }
    let left = 0
    let right = n - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};