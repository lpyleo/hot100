/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let min = Number.MAX_VALUE
    for(let i = 0;i<prices.length;i++){
        if(min>prices[i]){
            min = prices[i]
        }else{
            if(max<prices[i]-min){
                max = prices[i]-min
            }
        }
        // min>prices[i] ? min = prices[i] : (max<prices[i]-min ? max = prices[i]-min : null)
    }
    return max
};