/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let n = nums.length
    for(let i = 0; i < Math.pow(2, n); i++){
        let tmp = []
        for(let j = 0; j < n; j++){
            if((i & (1 << j)) !== 0){
                tmp.push(nums[j])
            }
        }
        result.push(tmp)
    }
    return result
};
// @lc code=end

