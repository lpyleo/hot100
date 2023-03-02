/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let map = new Map()
    let stack = []
    map.set(")","(")
    map.set("]","[")
    map.set("}","{")
    if(s.length%2===1){
        return false
    }
    for(let i = 0;i<s.length;i++){
        if(map.has(s.charAt(i))){
            if(!stack.length||stack[stack.length-1]!=map.get(s.charAt(i))){
                return false
            }
            stack.pop()
        }else{
            stack.push(s.charAt(i))
        }   
    }
    if(stack.length){
        return false
    }
    return true
};
console.log(isValid("(([]){})"))