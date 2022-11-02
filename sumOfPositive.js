/**
 * This function takes an array of numbers, and returns the sum of all of the positives ones.
 * @param {*} arr An array of numbers
 * @returns The sum of the positive numbers in the array
 */
function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0),0)
  }