/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    let l = Math.floor(nums.length/2)
    let result
    nums.forEach((item)=>{
        if(map.has(item)){
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
    })
    map.forEach((value, key)=>{
        if(map.get(key)>l){
            result = key
        }
    })
    return result
};
console.log(majorityElement([3,2,3]))