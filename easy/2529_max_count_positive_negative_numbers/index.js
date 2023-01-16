/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let posCount = 0;
  let negCount = 0;
  for (let num of nums) {
    if (num > 0) posCount++;
    else if (num < 0) negCount++;
  }
  return Math.max(posCount, negCount);
};
