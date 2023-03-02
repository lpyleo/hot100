/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    nums.sort((x, y) => x - y)
    for (let first = 0; first < nums.length; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) {
            continue
        }
        let third = nums.length - 1
        for (let second = first + 1; second < nums.length; second++) {
            if (second > first + 1 && nums[second] === nums[second - 1]) {
                continue
            }
            while (second < third && nums[second] + nums[third] + nums[first] > 0) {
                third--
            }
            if (second == third) {
                break
            }
            if (nums[second] + nums[third] + nums[first] === 0) {
                result.push([nums[second], nums[third], nums[first]])
            }
        }
    }
    return result
};
const a = threeSum([0, -1, -2, 0, 0, 1, 2, 1])
console.log(a)