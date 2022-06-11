var backtrack = function (combinations, phoneMap, digits, index, combination) {
    // 当前输入数字对应的所有字母均已组装完毕，将组装的数组转成字符串
    if (index === digits.length) {
        combinations.push(combination.join(''))
    } else {
        // index是输入的数字的指针，digit是对应的数字
        const digit = digits[index]
        // 获取数字对应的字母
        const letters = phoneMap[digit]
        const lettersCount = letters.length
        // 遍历当前数字的字母
        for (let i = 0; i < lettersCount; i++) {
            // 将遍历到字母存放到临时数组中
            combination.push(letters[i])
            // 回溯下一个输入的数字，需要将临时数组传递下去
            backtrack(combinations, phoneMap, digits, index + 1, combination)
            // 当前数字对应的字母已全部组合完成，需要剔除以便开始组装下一种组合
            combination.splice(index, 1)
        }
    }
}

var letterCombinations = function (digits) {
    const combinations = []

    if (digits === "") {
        return combinations
    }

    const phoneMap = {
        '2': 'abc',
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    }

    backtrack(combinations, phoneMap, digits, 0, [])

    return combinations
};