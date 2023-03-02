/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let newList
    if(lists.length<2){
        return lists
    }else{
        newList = lists[0]
        for(let i=1;i<lists.length;i++){
            newList = mergeTwoLists(newList,lists[i])
        }
    }
    return newList
}
var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(-1)
    let n = newList
    while (list1 && list2) {
        if (list1.val < list2.val) {
            n.next = list1
            list1 = list1.next
        } else {
            n.next = list2
            list2 = list2.next
        }
        n = n.next
    }
    n.next = list1 === null ? list2 : list1
    return newList.next
}