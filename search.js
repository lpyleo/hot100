/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(end>=start){
        let mid = (start + end) >> 1
        if(nums[mid]===target){
            return mid
        }
        if(nums[end]>nums[mid]){
            if(target>nums[mid]&&target<=nums[end]){
                start = mid+1
            }else{
                end = mid - 1
            }
        }else{
            if(target<nums[mid]&&target>=nums[start]){
                end = mid - 1
            }else{
                start = mid+1
            }
        }
    }
    return -1
};
let n = [4,5,6,7,0,1,2]
console.log(search(n,0))
