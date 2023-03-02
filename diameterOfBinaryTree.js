/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    const rootDeep = function(root) {
        if(!root){
            return 0
        }
        let left = rootDeep(root.left)
        let right = rootDeep(root.right)
        // console.log(root,left,right)
        sum = Math.max(sum,left+right)
        return Math.max(left,right)+1
    }
    let sum = 0
    rootDeep(root)
    return sum
};

let tree = new TreeNode(1)
tree.left = new TreeNode(2)
// tree.right = new TreeNode(3)
// tree.left.left = new TreeNode(4)
// tree.left.right = new TreeNode(5)
// tree.left.right.right = new TreeNode(6)
console.log(diameterOfBinaryTree(tree))
