var generateParenthesis = function (n) {
  const ans = []

  const backtrack = (ans, cur, open, close, max) => {
    // 当前括号组合的长度恰好等于括号对数*2，说明已完成组装
    if (cur.length === max * 2) {
      ans.push(cur.join(''))
      return
    }
    // 左括号小于括号对数，则开始组合
    if (open < max) {
      cur.push('(')
      backtrack(ans, cur, open + 1, close, max)
      cur.pop()
    }
    if (close < open) {
      cur.push(')')
      backtrack(ans, cur, open, close + 1, max)
      cur.pop()
    }
  }

  backtrack(ans, [], 0, 0, n)

  return ans
};

var ret = generateParenthesis(3);
console.log(ret);

var ret = generateParenthesis(1);
console.log(ret);
