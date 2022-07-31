/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const m = s.length
    const n = p.length

    const dp = [[true]]

    for (let i = 0; i <= m; ++i) {
        if (!Array.isArray(dp[i])) {
            dp[i] = []
        }
        for (let j = 1; j <= n; ++j) {
            if (p.charAt(j - 1) === '*') {
                // p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]
                dp[i][j] = dp[i][j - 2]
                if (matches(s, p, i, j - 1)) {
                    // 如果 p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.'
                    dp[i][j] = dp[i][j] || dp[i - 1][j]
                }
            } else {
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j - 1]
                }
            }
        }
    }
    return !!dp[m][n]
};

function matches(s, p, i, j) {
    if (i === 0) {
        return false
    }
    // 如果 p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1]
    if (p.charAt(j - 1) === '.') {
        return true
    }
    // 如果 p.charAt(j) == s.charAt(i) : dp[i][j] = dp[i-1][j-1]
    return s.charAt(i - 1) === p.charAt(j - 1)
}