/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root, level = 0, list = []) {
  if (!root) return [];

  // push at the index equivalent the level
  if (list[level]) list[level].push(root.val);
  else list[level] = [root.val];

  for (let child of root.children) {
    // recursively call levelorder for child with one level down
    levelOrder(child, level + 1, list);
  }

  return list;
};
