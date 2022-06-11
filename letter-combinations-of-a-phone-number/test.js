var backtrack = function (combinations, phoneMap, digits, index, combination) {
    if (index === digits.length) {
        combinations.push(combination.join(''))
    } else {
        const digit = digits[index]
        const letters = phoneMap[digit]
        const lettersCount = letters.length
        for (let i = 0; i < lettersCount; i++) {
            combination.push(letters[i])
            backtrack(combinations, phoneMap, digits, index + 1, combination)
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

var ret = letterCombinations("23")
console.dir(ret)

var ret = letterCombinations("")
console.dir(ret)

var ret = letterCombinations("2")
console.dir(ret)