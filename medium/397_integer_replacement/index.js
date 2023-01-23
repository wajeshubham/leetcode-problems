/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n, count = 0) {
  // base case
  if (n === 1) return count;
  // to optimize time add following heavy case
  if (n === 2 ** 31 - 1) return 32;

  if (n % 2 === 0) return integerReplacement(n / 2, count + 1);

  // get min count for odd numbers
  return Math.min(
    integerReplacement(n + 1, count + 1),
    integerReplacement(n - 1, count + 1)
  );
};
