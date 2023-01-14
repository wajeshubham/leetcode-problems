/**
 * @param {string} s
 * @return {number}
 */

// We will use sliding window technique to approach this problem
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  // Map is more optimal for execution time as compared to object
  let map = new Map();

  // our window will start with single letter in it at the index 0
  let leftIndex = 0;
  let rightIndex = 0;

  // initialize our max length to 0
  let maxLength = 0;

  // iterate till our right pointer reaches at the last char of the string
  while (rightIndex < s.length) {
    // take the character at the rightIndex
    let rightChar = s[rightIndex];

    if (map.get(rightChar) !== undefined && map.get(rightChar) >= leftIndex) {
      // if we have already encountered the rightChar previously
      // and the index of the rightChar in the string `s` is greater than or equal to our current left pointer index
      // means we have found a duplicate character in the substring. So, we set our left pointer one index ahead of the index of that rightChar that we encountered previously

      // so for example if s = "abcabcbb"
      // This condition will get executed when our rightIndex will reach at index 4
      // because we have already encountered `b` on the index 1
      // so we shift our leftIndex to `1+1` that is `2`
      // so our leftIndex will start from character `c`
      leftIndex = map.get(rightChar) + 1;
    }
    // we will update or set the rightChar in map and value will be the current rightIndex
    map.set(rightChar, rightIndex);
    // we will update the max length based on right and left index
    // because this is a 0-based index array we have to add `1` for the length
    maxLength = Math.max(maxLength, rightIndex - leftIndex + 1);

    // we will increment rightIndex as normal
    rightIndex++;
  }
  return maxLength;
};
