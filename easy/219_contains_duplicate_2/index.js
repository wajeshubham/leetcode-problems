/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    // if map has the number we are operating on then we have the pair
    // we just have to test if the absolute difference between the indices of two numbers is less than or equal to `k
    if (map.has(currentNum) && Math.abs(i - map.get(currentNum)) <= k)
      return true;
    else map.set(currentNum, i);
  }
  return false;
};
