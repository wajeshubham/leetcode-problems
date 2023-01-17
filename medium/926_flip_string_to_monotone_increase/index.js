function minFlipsMonoIncr(s) {
  let flipsNeeded = 0;
  let encounteredOnes = 0;
  for (let char of s) {
    if (char === "1") {
      // if char is one we increase ones encounter variables
      encounteredOnes++;
    } else {
      // if char is zero
      // case 1: zero is at the starting part of the string where we haven't encountered any "1"s
      // That means our string is monotonically increasing at this step ans we don't need to flip anything so our flipsNeeded should stay on 0

      // case 2: We have encountered 1s before and encounteredOnes > 1

      // So, we have two options
      // Option1: flip encountered "1"s to "0"s
      // Option2: flip "0"s to "1"s

      // choose optimal
      flipsNeeded = Math.min(encounteredOnes, flipsNeeded + 1);
      //  flipsNeeded + 1 because we are operating on one "0"
    }
  }
  return flipsNeeded;
}
