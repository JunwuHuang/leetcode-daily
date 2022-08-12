# 字母异位词分组

2022/08/12

> <https://leetcode.cn/problems/group-anagrams/>

## 示例

### 示例一

```text
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### 示例二

```text
输入: strs = [""]
输出: [[""]]
```

### 示例三

```text
输入: strs = ["a"]
输出: [["a"]]
```

## 题解参考

### 计数

将数组作为key，value为字符串的集合

```javascript
var groupAnagrams = function (strs) {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - "a".charCodeAt()]++;
    }
    // 将数组作为key，value为字符串的集合
    map[count] ? map[count].push(s) : (map[count] = [s]);
  }
  return Object.values(map);
};

```
