# 单词搜索

2022/09/18

> <https://leetcode.cn/problems/word-search/>

## 示例

### 示例一

```text
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

### 示例二

```text
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
```

### 示例三

```text
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false
```

## 题解

### 回溯

```javascript
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const height = board.length
    const width = board[0].length;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const visited = new Array(height);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(width).fill(false);
    }

    const check = (row, column, str, k) => {
        if (board[row][column] != str.charAt(k)) {
            return false;
        } else if (k == str.length - 1) {
            return true;
        }
        visited[row][column] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newRow = row + dx, newColumn = column + dy;
            if (newRow >= 0 && newRow < height && newColumn >= 0 && newColumn < width) {
                if (!visited[newRow][newColumn]) {
                    const flag = check(newRow, newColumn, str, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[row][column] = false;
        return result;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};
```
