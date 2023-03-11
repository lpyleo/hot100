/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = []
    let map = new Map()
    for(let i = 0; i < strs.length; i++){
        let tmp = strs[i].split('').sort().join('')
        if(map.has(tmp)){
            map.get(tmp).push(strs[i])
        }else{
            map.set(tmp, [strs[i]])
        }
    }
    map.forEach((value, key) => {
        result.push(value)
    })
    return result
};
// @lc code=end

