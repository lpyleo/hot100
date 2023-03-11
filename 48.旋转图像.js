/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix[0].length
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = tmp
        }
    }
    for(let i = 0; i < n; i++){
        matrix[i].reverse()
    }
};
// @lc code=end

