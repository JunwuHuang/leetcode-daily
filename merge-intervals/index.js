/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ret = [];
  for (let i = 0; i < intervals.length; i++) {
    const [L, R] = intervals[i];
    if (ret.length === 0 || ret[ret.length - 1][1] < L) {
      ret.push([L, R]);
      continue;
    }
    ret[ret.length - 1][1] = Math.max(ret[ret.length - 1][1], R);
  }
  return ret;
};
