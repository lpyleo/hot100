// // 暴力求解法
// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// var generateParenthesis = function (n) {
//     let result = []
//     generateAll("", result, 0, 2 * n)
//     return result
// }
// var generateAll = function (current, result, index, len) {
//     if (index === len) {
//         if (current && valid(current)) {
//             result.push(current)
//         }
//     } else {
//         let c = current
//         generateAll(c+"(", result, index + 1, len)
//         generateAll(c+")", result, index + 1, len)
//     }
// }
// var valid = function (content) {
//     let op = 0
//     for (let char of content) {
//         if (char === '(') {
//             op++
//         } else {
//             op--
//         }
//         if (op < 0) {
//             return false
//         }
//     }
//     return op === 0
// }
// console.log(generateParenthesis(2))


// 回溯
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    let result = []
    generateAll("", result, 0, 0,  n)
    return result
}
var generateAll = function(current, result, left, right, len){
    if(current.length===len*2){
        result.push(current)
    }else{
        if(left<len){
            let c = current+"("
            // current+="("
            generateAll(c,result,left+1,right,len)
        }
        if(right<left){
            let c = current+")"
            // current+=")"
            generateAll(c,result,left,right+1,len)
        }
    }
}
console.log(generateParenthesis(2))