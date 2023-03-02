/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = []
    for(let i = 0;i<=n;i++){
        arr.push(countOne(i))
    }
    return arr
};
const countOne = a => {
    let i = 0
    while(a>0){
        a &= (a-1)
        i++
    }
    return i
}