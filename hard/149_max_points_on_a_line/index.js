function maxPoints(points) {
  // points are set to be on same line if any of two points on the line calculates to equal slope
  // slope = (y2 - y1)/(x2 - x1)
  let count = 0; // set initial points count to 0

  // we need two points on the plane to calculate the slope
  for (let i = 0; i < points.length; i++) {
    // initialize the slopes map to keep track of the slopes we calculate
    let slopes = new Map();
    // get x1 and y1 by accessing ith indexed point in the points array
    let [x1, y1] = [...points[i]]; // for example: for points = [[1,1],[2,2],[3,3]] at index 0 [x1, y1] would be [1, 1]

    // keep track of the slope and current max points on the line
    let currentMax = 1, // we keep currentMax 1 because in points array there will be st least 1 point
      slope = 0;

    // Now, we need second point on the plane to get enough material to calculate the slope
    // so we start our j with i + 1 because we cannot calculate slope with same coordinates
    for (let j = i + 1; j < points.length; j++) {
      // we access x2 and y2 based on next coordinate
      let [x2, y2] = [...points[j]]; // for example: for points = [[1,1],[2,2],[3,3]] with i === 0, [x2, y2] would be [2, 2]

      // if x2 === x1 then our points lie on the line parallel to the X-axis so our slope will become infinite
      if (x2 === x1) slope = Number.MAX_VALUE;
      // else we calculate the slope by the following equation
      else slope = (y2 - y1) / (x2 - x1);

      // if we don't have slope in the slopes map that means we have found two points with unique slope
      // so we keep that slope in the slopes map with value 2 because we have calculated that unique slope with TWO points
      if (!slopes.has(slope)) slopes.set(slope, 2);
      // else if we already have slope in the slopes map, that means we have at least two points lie on the same line
      // So, we increment the points count by 1 because one of the points i.e. [x1, y1] or [x2, y2] is discovered newly on the line
      else slopes.set(slope, slopes.get(slope) + 1);

      // we update our currentMax if we have slope of our current coordinates greater than currentMax
      currentMax = Math.max(currentMax, slopes.get(slope));
    }

    // on completion of inner loop we update our main count variable
    count = Math.max(count, currentMax);
  }
  return count;
}
