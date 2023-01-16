/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // copy the intervals array
  let arrayWithNewInterval = [...intervals];
  // insert the newInterval to the cloned array
  arrayWithNewInterval.push(newInterval);
  // Sort the cloned array based on first element
  arrayWithNewInterval.sort((a, b) => a[0] - b[0]);

  let result = [];

  // loop over cloned array
  for (let [x, y] of arrayWithNewInterval) {
    let currentResultLength = result.length;
    if (!currentResultLength) {
      // for empty result array we don't have anything to compare with so we push whatever we get
      result.push([x, y]);
      continue;
    }
    if (result[currentResultLength - 1][1] < x) {
      // for input:
      // intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
      // arrayWithNewInterval will be : [[1,2],[3,5],[4,8],[6,7],[8,10],[12,16]]
      // so when we are operating on [3, 5] there is [1, 2] present in result array
      // this if statement is true because result[currentResultLength - 1][1] (2) is less than x (3)
      // so we push because both intervals are out of bound and independent
      result.push([x, y]);
    } else {
      // when we move next
      // last element in result array will be [3, 5]
      // [x, y] will be [4, 8]
      // now 5 is not lesser than 4
      // so we have to merge these bounds
      // so instead of pushing we update the last element of result array
      // we assign max between 1st index of the last item in the result array and y
      result[currentResultLength - 1][1] = Math.max(
        result[currentResultLength - 1][1],
        y
      );
    }
  }
  return result;
};
