var swap = function (a, b, nums) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

var sortColors = function (nums) {
  const len = nums.length;
  let head = 0;
  let tail = len - 1;
  for (let i = 0; i <= tail; i++) {
    while (nums[i] === 2 && i <= tail) {
      swap(i, tail, nums);
      tail -= 1;
    }
    if (nums[i] === 0) {
      swap(i, head, nums);
      head += 1
    }
  }
};

var nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

var nums = [2, 0, 1];
sortColors(nums);
console.log(nums);

var nums = [1, 2, 2, 2, 2, 0, 0, 0, 1, 1];
sortColors(nums);
console.log(nums);
