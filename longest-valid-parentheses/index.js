/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const len = s.length
    let maxans = 0
    const dp = new Array(len).fill(0)
    for (let i = 1; i < len; i++) {
        if (s.charAt(i) === ')') {
            if (s.charAt(i - 1) === '(') {
                dp[i] = 2
                if (i >= 2) {
                    dp[i] += dp[i - 2]
                }
            } else {
                const expectMatchedIndex = i - dp[i - 1]
                if (expectMatchedIndex <= 0) {
                    continue
                }
                if (s.charAt(expectMatchedIndex - 1) === '(') {
                    dp[i] = dp[i - 1] + 2
                    if (expectMatchedIndex >= 2) {
                        dp[i] += dp[expectMatchedIndex - 2]
                    }
                }
            }
            maxans = Math.max(maxans, dp[i])
        }
    }
    return maxans
};


var ret = longestValidParentheses("(()")
console.log(ret)