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

function isMirror(leftSubTree, rightSubTree) {
  // if both left and right subtrees are null for a particular root node then that subtree is symmetric
  if (leftSubTree === null && rightSubTree === null) return true;
  // if either of the left and right subtrees is not null then that subtree is not symmetric
  if (leftSubTree === null || rightSubTree === null) return false;
  // It is not a symmetric subtree if respective left and right node has different values
  if (leftSubTree.val !== rightSubTree.val) return false;
  // if both left and right subtree nodes exist with same value in them then we do mirroring on left and right of those subtrees
  return (
    isMirror(leftSubTree.left, rightSubTree.right) &&
    isMirror(leftSubTree.right, rightSubTree.left)
  );
}

function isSymmetric(root) {
  // If no root then it's symmetric
  if (!root) return true;
  // we perform mirroring on left and right subtrees
  return isMirror(root.left, root.right);
}
