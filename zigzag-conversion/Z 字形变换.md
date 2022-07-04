# Z 字形变换

2022/06/02

> <https://leetcode.cn/problems/zigzag-conversion/>

## 示例

### 示例一

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

### 示例二

```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

### 示例三

```
输入：s = "A", numRows = 1
输出："A"
```

## 思考过程

### 初次尝试

这是错误题解，写了半天后，发现审题没仔细，理解错了要求，在处理非首行和最后一行的时候有问题。

```javascript
var convert = function (s, numRows) {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  const splitCharCount = numRows - 2;
  const charCountPerGroup = numRows + splitCharCount;
  const restCharCount = len % splitCharCount;
  const convertedString = [];
  const charCountInFirstRow = Math.ceil(len / charCountPerGroup);
  const charCountInLastRow = Math.floor(len / charCountPerGroup);
  const getCharCountinCurrentRow = (rowIndex) => {
    if (restCharCount > rowIndex + 1) {
      return charCountInLastRow * 2 + 1;
    } else {
      return charCountInLastRow * 2;
    }
  };
  let head = charCountInFirstRow;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    // 第一行
    if (i % charCountPerGroup === 0) {
      const position = Math.floor(i / charCountPerGroup);
      convertedString[position] = char;
      continue;
    }
    // 最后一行
    if (i % charCountPerGroup === numRows - 1) {
      const position =
        len - (charCountInLastRow - Math.floor(i / charCountPerGroup));
      convertedString[position] = char;
      continue;
    }
    convertedString[head++] = char;
  }
  return convertedString.join("");
};
```

### 二维矩阵

重新审题后针对剩下的情况一直没有思路，所以查看题解并尝试理解

```javascript
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows;
  if (r === 1 || r >= n) {
    return s;
  }
  const t = r * 2 - 2;
  const c = Math.floor((n + t - 1) / t) * (r - 1);
  const mat = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let i = 0, x = 0, y = 0; i < n; ++i) {
    mat[x][y] = s[i];
    if (i % t < r - 1) {
      ++x; // 向下移动
    } else {
      --x;
      ++y; // 向右上移动
    }
  }
  const ans = [];
  for (const row of mat) {
    for (const ch of row) {
      if (ch !== 0) {
        ans.push(ch);
      }
    }
  }
  return ans.join("");
};
```
