/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while(start<=end){
        let mid = (start + end) >> 1
        if(nums[mid]===target){
            start = mid-1
            end = mid+1
            while(start>=0&&nums[start]===target){
                start--
            }
            while(end<=nums.length-1&&nums[end]===target){
                end++
            }
            start = start + 1
            end = end - 1
            return [start,end]
        }else if(target>nums[mid]){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return [-1,-1]
};
// @lc code=end

