/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let result = []
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })
    let tmp = intervals[0]
    for(let i = 1; i < intervals.length; i++){
        if(tmp[1]>=intervals[i][0]){
            tmp = [tmp[0], Math.max(tmp[1],intervals[i][1])]
        }else{
            result.push(tmp)
            tmp = intervals[i]
        }
    }
    result.push(tmp)
    return result
};
// @lc code=end

