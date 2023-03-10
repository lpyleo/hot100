/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    backTrack(nums, result, [])
    return result
};

function backTrack(nums, result, temp){
    if(nums.length === temp.length){
        result.push([...temp])
        return
    }
    for(let i = 0;i<nums.length;i++){
        if(temp.includes(nums[i])){
            continue
        }
        temp.push(nums[i])
        backTrack(nums, result, temp)
        temp.pop()
    }
}
// @lc code=end

