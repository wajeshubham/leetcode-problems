/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let arr = this.nums.slice(left, right + 1);
  return arr.reduce((p, c) => p + c, 0);
};
