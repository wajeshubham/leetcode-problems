const append = (head, val) => {
  let nodeToBeAppended = new ListNode(val);

  // if there is no head means linked list is empty
  if (!head) {
    // make new node as our new head
    head = nodeToBeAppended;
    return head;
  }
  let currentNode = head;
  // Iterate over the linkedlist
  while (currentNode) {
    // if there is no next node that means we have reached to the end
    // So we append the new node at the end and break out of the loop
    if (!currentNode.next) {
      currentNode.next = nodeToBeAppended;
      break;
    }
    // move forward
    currentNode = currentNode.next;
  }
  // return the head
  return head;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let resultLinkedList = null;
  let currentL1Node = l1;
  let currentL2Node = l2;
  let remainder = 0;

  // iterate over both the lists
  // we want to iterate till we have node from either of the lists
  while (currentL1Node || currentL2Node) {
    // Calculate the sum considering remainder as well
    let sum = (currentL1Node?.val || 0) + (currentL2Node?.val || 0) + remainder;

    if (sum >= 10) {
      // if sum is greater the we only want to append the digit at the tenth place
      // As we each node has value between 0 to 9 the max sum that we can get is 9 + 9 = 18
      // so we append 8 (18 - 10) and store 1 in the remainder
      remainder = 1;
      resultLinkedList = append(resultLinkedList, sum - 10); // we are appending in our new linkedList
    } else {
      // if sum is less that 10 we simply append the single digit
      remainder = 0;
      resultLinkedList = append(resultLinkedList, sum);
    }
    // move forward
    currentL1Node = currentL1Node?.next;
    currentL2Node = currentL2Node?.next;
  }
  // after completing the iteration if there is a remainder we simply want to append that as well at the end
  if (remainder) resultLinkedList = append(resultLinkedList, remainder);

  // THIS SUM IS GOING LEFT TO RIGHT WHICH IS NOT HOW WE USUALLY SUM UP BUT PROBLEM CONSTRAIN SHOW THAT WE SHOULD SUM UP DIGITS FROM LEFT TO RIGHT
  return resultLinkedList;
};
