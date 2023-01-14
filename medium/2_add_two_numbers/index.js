/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const append = (node, val) => {
  let newNode = new ListNode(val);
  if (!node) {
    node = newNode;
    return node;
  }
  let currentNode = node;
  while (currentNode) {
    if (!currentNode.next) {
      currentNode.next = newNode;
      break;
    }
    currentNode = currentNode.next;
  }
  return node;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ans = null;
  let node1 = l1;
  let node2 = l2;
  let rem = 0;
  while (node1 || node2) {
    let sum = (node1?.val || 0) + (node2?.val || 0) + rem;
    if (sum >= 10) {
      rem = 1;
      ans = append(ans, sum - 10);
    } else {
      rem = 0;
      ans = append(ans, sum);
    }
    node1 = node1?.next;
    node2 = node2?.next;
  }
  if (rem) ans = append(ans, rem);
  return ans;
};
