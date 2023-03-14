/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length
    if(m === 1 && n === 1){
        return grid[0][0]
    }
    let dp = []
    for(let i = 0; i < m; i++){
        dp[i] = []
    }
    dp[0][0] = grid[0][0]
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i === 0 && j === 0){
                continue
            }
            if(i === 0){
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }else if(j === 0){
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else{
                dp[i][j] = Math.min((dp[i-1][j] + grid[i][j]), (dp[i][j-1] + grid[i][j]))
            }
        }
    }
    return dp[m-1][n-1]
};
// @lc code=end

