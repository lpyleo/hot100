/**
 * @param {string} digits
 * @return {string[]}
 */
const backTrack = function (result, map, digitss, index, str) {
    if (index === digitss.length) {
        result.push(str)
    } else {
        let d = map.get(digitss.charAt(index))
        for (let i = 0; i < d.length; i++) {
            str += d.charAt(i)
            backTrack(result, map, digitss, index + 1, str)
            str = str.substr(0, str.length - 1)
        }
    }
}
var letterCombinations = function (digits) {
    let result = [];
    if (digits.length === 0) {
        return result
    }
    let newMap = new Map()
    let str = ""
    newMap.set('2', "abc");
    newMap.set('3', "def");
    newMap.set('4', "ghi");
    newMap.set('5', "jkl");
    newMap.set('6', "mno");
    newMap.set('7', "pqrs");
    newMap.set('8', "tuv");
    newMap.set('9', "wxyz");
    backTrack(result, newMap, digits, 0, str)
    return result
}
const k = letterCombinations("")
console.log(k)