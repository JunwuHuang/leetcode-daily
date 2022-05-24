var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return 0;
  }
  var maxLength = 1;
  var currentString = s[0];
  for (var i = 1; i < s.length; i++) {
    for (var j = 0; j < currentString.length; j++) {
      if (s[i] === currentString[j]) {
        currentString = currentString.slice(j + 1);
        break;
      }
    }
    currentString += s[i];
    maxLength = Math.max(currentString.length, maxLength);
  }
  return maxLength;
};

var ret = lengthOfLongestSubstring("abcabcbb");
console.log(ret);

var ret = lengthOfLongestSubstring("bbbbb");
console.log(ret);

var ret = lengthOfLongestSubstring("pwwkew");
console.log(ret);

var ret = lengthOfLongestSubstring("cdd");
console.log(ret);

var ret = lengthOfLongestSubstring("aabaab!bb");
console.log(ret);
