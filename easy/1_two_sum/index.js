function twoSum(nums, target) {
  // Create an empty object to store the mapping of numbers to their indices
  const indices = {};

  // Iterate through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Compute the difference between the current number and the target value
    const difference = target - nums[i];

    // If the difference exists in the mapping of indices means we have encountered the second number of our pair, that add up to the target value
    if (difference in indices) {
      // Return the indices of the two numbers
      return [indices[difference], i];
    }

    // Otherwise, add the current number and its index to the mapping
    indices[nums[i]] = i;
  }

  // If we reach this point, no pair of numbers was found that adds up to the target value
  return [-1, -1];
}
