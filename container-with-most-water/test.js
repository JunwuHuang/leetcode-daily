/**
 * 使用双指针，头尾相遇时可算出最大的面积，i代表从头开始的指针，j代表从尾部开始的指针
 * 假设当height[i] < height[j]时，此时面积为(j - i) * height[i]
 * 若将 i 向后移
 *    
      若height[i + 1] > height[i], 则面积变大
      (j - (i + 1)) * height[i + 1]

      因为height[j] > height[i], 所以面积变大
      (j - (i + 1)) * height[j]
 * 若将 j 向后移
      若height[j - 1] > height[i]，则面积变大
      (j - 1 - i) * height[j - 1]

      面积变小
      (j - 1 - i) * height[i]
 * 上述场景举例帮助我理解了，当双指针移动的时候只选择将短板靠内移动时，最大面积不会丢失
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    if (height[i] < height[j]) {
      max = Math.max(max, height[i] * (j - i));
      i++;
    } else {
      max = Math.max(max, height[j] * (j - i));
      j--;
    }
  }
  return max;
};

var ret = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(ret);

var ret = maxArea([1, 1]);
console.log(ret);
