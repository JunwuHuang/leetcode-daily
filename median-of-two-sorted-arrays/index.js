/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  const totalLength = length1 + length2;
  if (totalLength % 2 === 1) {
    // 奇数
    const midIndex = Math.floor(totalLength / 2);
    return getKthElement(nums1, nums2, midIndex + 1);
  } else {
    // 偶数
    const midIndex1 = Math.floor(totalLength / 2) - 1;
    const midIndex2 = Math.floor(totalLength / 2);
    return (
      (getKthElement(nums1, nums2, midIndex1 + 1) +
        getKthElement(nums1, nums2, midIndex2 + 1)) /
      2
    );
  }
};

/**
 * 思路：
 *      找到第k小的元素，分别取nums1和nums2的第 k / 2 -1 个元素进行比较
 *      定义：
 *          pivot1 = Math.floor(nums1[k/2]) - 1
 *          pivot2 = Math.floor(nums2[k/2]) - 1
 *      若 pivot1 < pivot2
 *          则删除nums1下，前 k /2 - 1 个元素，并根据更新后的数组重新调整 k 的值
 *      反之，同理
 */
function getKthElement(nums1, nums2, k) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  let index1 = 0;
  let index2 = 0;

  while (true) {
    if (index1 === length1) {
      return nums2[index2 + k - 1];
    }
    if (index2 === length2) {
      return nums1[index1 + k - 1];
    }
    if (k === 1) {
      return Math.min(nums1[index1], nums2[index2]);
    }

    const half = Math.floor(k / 2);
    const newIndex1 = Math.min(index1 + half, length1) - 1;
    const newIndex2 = Math.min(index2 + half, length2) - 1;
    const pivot1 = nums1[newIndex1];
    const pivot2 = nums2[newIndex2];

    if (pivot1 <= pivot2) {
      k -= newIndex1 - index1 + 1;
      index1 = newIndex1 + 1;
    } else {
      k -= newIndex2 - index2 + 1;
      index2 = newIndex2 + 1;
    }
  }
}

var ret = findMedianSortedArrays([1, 3], [2]);
console.log(ret);
var ret = findMedianSortedArrays([1, 2], [3, 4]);
console.log(ret);
var ret = findMedianSortedArrays([1, 2, 3, 6], [1, 3, 4, 5, 9, 10]);
console.log(ret);
