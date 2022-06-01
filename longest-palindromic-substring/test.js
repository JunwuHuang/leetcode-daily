/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  // 如果字符串长度为1，则回文子串为本身
  if (len < 2) {
    return s;
  }
  const dp = [];
  let maxLen = 1;
  let begin = 0;

  for (let i = 0; i < len; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    dp[i][i] = true;
  }

  const charArray = s.split("");

  // 假设子串长度为L
  for (let L = 2; L <= len; L++) {
    // 第i个字母
    for (let i = 0; i < len; i++) {
      // j为第i个字母加上子串长度L - 1
      const j = L - 1 + i;
      // 当j大于等于字符串的时候，则获取不到字符，即结束遍历
      if (j >= len) {
        break;
      }
      // 第i个字母与第j个字母不同，则continue
      if (charArray[i] !== charArray[j]) {
        dp[i][j] = false;
        continue
      } else {
        // 若第i个字母与第j个字母的距离小于3的情况：
        // babad中的: bab
        // cbbd中的: bb
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          // 否则再判断内一层的字符是否相等(回文规则)
          // ababa中，第0个字符与第4个字符相等，接着判断第1个字符与第3个字符是否相等
          // 若不相等，说明
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
};

var ret = longestPalindrome("babad");
console.log(ret);

var ret = longestPalindrome("cbbd");
console.log(ret);
