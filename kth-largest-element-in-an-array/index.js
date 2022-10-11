var findKthLargest = function (nums, k) {
    const len = nums.length
    const target = len - k

    let left = 0
    let right = len - 1

    while (true) {
        const pivotIndex = partition(nums, left, right)
        if (pivotIndex === target) {
            return nums[pivotIndex]
        } else if (pivotIndex < target) {
            left = pivotIndex + 1
        } else {
            right = pivotIndex - 1
        }
    }
};

function partition(nums, left, right) {
  const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
  swap(nums, left, randomIndex);

  const pivot = nums[left];
  let le = left + 1;
  let ge = right;

  while (true) {
    while (le <= ge && nums[le] < pivot) {
      le++;
    }

    while (le <= ge && nums[ge] > pivot) {
      ge--;
    }

    if (le >= ge) {
      break;
    }
    swap(nums, le, ge);
    le++;
    ge--;
  }

  swap(nums, left, ge);
  return ge;
}

function swap(nums, index1, index2) {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5

var ret = findKthLargest([3,2,1,5,6,4], 2)
console.log(ret)