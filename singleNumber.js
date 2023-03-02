/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result
    nums.forEach((element,index) => {
        nums[index]=null
        let i = nums.indexOf(element)
        if(i!=-1){
            nums[i]=null
        }else{
            result = element
        }
    });
    return result
};
console.log(singleNumber([1]))


// var singleNumber = function(nums) {
//     let result = 0
//     nums.forEach(element => {
//         result = result ^ element
//     });
//     return result
// };