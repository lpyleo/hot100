/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = nums[0]
    if(nums.length === 1){
        return true
    }
    for(let i = 1; i < nums.length; i++){
        if(max<i){
            break
        }
        if(max>=nums.length-1){
            return true
        }
        max = Math.max(max,i+nums[i])
    }
    return false
};
// @lc code=end

