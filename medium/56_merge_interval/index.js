/**
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Sort the intervals array because its not sorted based on first element
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  for (let [x, y] of intervals) {
    // logic same as medium problem number 57 (insert interval)
    if (!result.length || result[result.length - 1][1] < x) {
      result.push([x, y]);
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], y);
    }
  }
  return result;
};
