/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// We will approach this problem with three pointers technique
var threeSum = function (nums) {
  // As constraints says that minimum length of nums array would be 3
  // following can be our quick case
  if (nums.length === 3) return nums[0] + nums[1] + nums[2] === 0 ? [nums] : [];

  // sort the array to manage our left right and current pointers
  nums.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Loop over the nums and if we find two adjacent numbers which are identical we don't need to iterate again
    // so we continue
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // initialize our left pointer right next to our current index i
    let left = i + 1;
    // initialize our right pointer at the last index
    let right = nums.length - 1;

    // while our right and left haven't overlapped
    while (right > left) {
      // calculate the sum from i, left and right
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // if sum is 0 then we have found our triplet
        // push that into result array
        result.push([nums[i], nums[left], nums[right]]);
        // increment and decrement the left and right pointers respectively
        left++;
        right--;

        // following is the optimization check so that we don't iterate over duplicate left and right values
        while (right > left && nums[left] === nums[left - 1]) left++;
        while (right > left && nums[right] === nums[right + 1]) right--;
      } else if (sum > 0) {
        // if sum is greater than 0, that means our right index is high
        // so we decrement our right pointer
        right--;
      } else {
        // if sum is less than 0, that means our left index is low
        // so we increment our left pointer
        left++;
      }
    }
  }
  return result;
};
