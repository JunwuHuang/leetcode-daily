/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];
  for (let char of s) {
    if (pairs.has(char)) {
      if (!stack.length || stack[stack.length - 1] !== pairs.get(char)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return !stack.length
};

var ret = isValid("()");
console.log(ret);

var ret = isValid("()[]{}");
console.log(ret);

var ret = isValid("([)]");
console.log(ret);

var ret = isValid("{[]}");
console.log(ret);
