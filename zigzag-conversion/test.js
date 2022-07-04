/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
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
    if (rowIndex === 0) {
      return charCountInFirstRow;
    }
    if (rowIndex === numRows - 1) {
      return charCountInLastRow;
    }
    if (restCharCount > rowIndex + 1) {
      return charCountInLastRow * 2 + 1;
    } else {
      return charCountInLastRow * 2;
    }
  };
  let head = charCountInFirstRow;
  for (let i = 0; i < len; i++) {
    const char = s[i];
    const currentGroup = Math.floor(i / charCountPerGroup);
    // 第一行
    if (i % charCountPerGroup === 0) {
      convertedString[currentGroup] = char;
      continue;
    }
    // 最后一行
    if (i % charCountPerGroup === numRows - 1) {
      const position = len - (charCountInLastRow - currentGroup);
      convertedString[position] = char;
      continue;
    }
    let currentRow;
    if (i % charCountPerGroup < numRows - 1) {
      currentRow = i % charCountPerGroup;
    } else {
      currentRow = charCountPerGroup - (i % charCountPerGroup);
    }

    let position = charCountInFirstRow;

    while (currentRow > 1) {
      position += getCharCountinCurrentRow(--currentRow);
    }

    while (convertedString[position] !== undefined) {
      position++;
    }
    convertedString[position] = char;
  }
  return convertedString.join("");
};

var ret = convert("PAYPALISHIRING", 3);
console.log(ret);

var ret = convert("PAYPALISHIRING", 4);
console.log(ret);

var ret = convert("A", 1);
console.log(ret);
