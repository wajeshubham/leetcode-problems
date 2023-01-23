/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // backtracking approach
  const stack = [];
  const result = [];

  // we can at max open `n` number of brackets only so on the basis of that condition we can backtrack
  function backtrack(openCount, closedCount) {
    // if openCount and closedCount are equal to n then we know that we have open and closed `n` number of parentheses
    if (openCount === closedCount && openCount === n) {
      // so we push our joined stack and return
      result.push(stack.join(""));
      return;
    }

    // if we have opened parentheses which are less than our allowed `n` number of parentheses
    if (openCount < n) {
      // we open that again ans increment our openCount by 1
      stack.push("(");
      backtrack(openCount + 1, closedCount);
      // we need to pop so that we empty out our stack for each new iteration
      stack.pop();
    }

    // Similarly, if we have closed parentheses which are less than our `openCount` number of parentheses
    if (closedCount < openCount) {
      // we push the closing bracket to our stack and increment closedCount by 1
      stack.push(")");
      backtrack(openCount, closedCount + 1);
      // we need to pop so that we empty out our stack for each new iteration
      stack.pop();
    }
  }
  backtrack(0, 0);
  return result;
};
