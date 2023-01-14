/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let map = new Map();
  let leftIndex = 0;
  let rightIndex = 0;
  let max = 0;
  while (rightIndex < s.length) {
    let rightChar = s[rightIndex];
    if (map.get(rightChar) !== undefined && map.get(rightChar) >= leftIndex) {
      leftIndex = map.get(rightChar) + 1;
    }
    map.set(rightChar, rightIndex);
    max = Math.max(max, rightIndex - leftIndex + 1);
    rightIndex++;
  }
  return max;
};
