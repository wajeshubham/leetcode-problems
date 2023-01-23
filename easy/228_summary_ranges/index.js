/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  // if no nums present return empty array
  if (!nums.length) return nums;
  let result = [];

  let rangeArray = [nums[0]]; // initialize range array with initial number

  for (let i = 1; i < nums.length; i++) {
    // if two adjacent items with difference of 1
    if (nums[i] === nums[i - 1] + 1) {
      // those items are part of the range
      // so we keep last element of range array as last element of our range
      rangeArray[1] = nums[i];
    } else {
      // if we encounter element with difference more that 1
      // we are not any,more in the range
      if (rangeArray.length > 1) {
        // so if we have the rangeArray with two values that means we have some range
        // so we join two of them with ->
        result.push(`${rangeArray[0]}->${rangeArray[1]}`);
      } else {
        // else if we have individual item then we push that item only
        result.push(`${rangeArray[0]}`);
      }
      // after finish we add new item in range array
      rangeArray = [nums[i]];
    }
  }
  // if rangeArray has any item in it we join them with -> if we have single we will not get -> in it
  if (rangeArray.length) result.push(rangeArray.join("->"));
  return result;
};
