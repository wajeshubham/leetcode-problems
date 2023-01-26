/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  function dfs(node, incrementSum = false) {
    // if incrementSum is true and if it is a leaf node then add it in the sum
    if (incrementSum && !node.left && !node.right) sum += node.val;
    else {
      // for every left node the incrementSum should be true because we need to add left leaf node
      if (node.left) dfs(node.left, true);
      // for right incrementSum should be false because we don't need to add it in the sum
      // However we still need to traverse through it because we might get to left leaf nodes through right subtrees
      if (node.right) dfs(node.right, false);
    }
  }
  dfs(root, false);
  return sum;
};
