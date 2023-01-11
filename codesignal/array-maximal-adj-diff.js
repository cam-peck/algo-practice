// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  let result = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (currentDifference > result) {
      result = currentDifference;
    }
  }
  return result;
}

// input: array of numbers (-15 -> +15)
// output: number (max difference)

// initialize result at -infinity
// loop through input array -- for each iteration...
// subtract current number from next number and take absolute value
// if value is bigger than result, replace result with value
// else continue iterating
// when finished iterating, return result
