/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const ori = {};
  const cnt = {};

  const check = () => {
    for (const key in ori) {
      if (~~cnt[key] < ori[key]) {
        return false;
      }
    }
    return true;
  };

  const tLen = t.length;
  for (let i = 0; i < tLen; i++) {
    const c = t[i];
    ori[c] = ~~ori[c] + 1;
  }

  let l = 0,
    r = -1;
  let len = Number.MAX_SAFE_INTEGER;
  let ansL = -1,
    ansR = -1;
  const sLen = s.length;
  while (r < sLen) {
    r += 1;
    const c = s[r];
    if (r < sLen && ori[c]) {
      cnt[c] = ~~cnt[c] + 1;
    }
    while (check() && l <= r) {
      if (r - l + 1 < len) {
        len = r - l + 1;
        ansL = l;
        ansR = l + len;
      }
      const char = s[l];
      if (ori[char]) {
        cnt[char] = ~~cnt[char] - 1;
      }
      l += 1;
    }
  }
  return ansL === -1 ? "" : s.substring(ansL, ansR);
};

var ret = minWindow("ADOBECODEBANC", "ABC");
console.log(ret);
