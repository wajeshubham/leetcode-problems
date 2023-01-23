/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root, targetSum) {
  // if no root then it cannot contribute in sum as it has val null
  if (!root) return false;
  // if its a leaf node and the targetSum that we are looking for is same as leaf node val
  // because on each recursion step we are decrementing targetSum by parent root's value
  if (!root.left && !root.right) return root.val === targetSum;

  // if root has left or right we recursively call hasPathSum with targetSum being original targetSum - root's value
  // because root has already contributed in target sum and we no want to check for sum targetSum - root
  // that's why if we go down the valid path our targetSUm at the leaf node will be equal to leaf node's value
  // that's what we are checking in our previous condition
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
