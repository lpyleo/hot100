/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a, b) => (a-b))
    let path = [] // 路径
    let result = [] //返回的结果
    function backTrack(start, sum){
        if(sum === target){
            result.push([...path])
        }
        for(let i = start;i<candidates.length;i++){
            if(sum+candidates[i]>target){
                return
            }
            path.push(candidates[i])
            backTrack(i,sum+candidates[i])
            path.pop()
        }
    }
    backTrack(0,0)
    return result
};
// @lc code=end

