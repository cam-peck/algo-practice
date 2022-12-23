// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  let result = [];
  let longestInt = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestInt) {
      longestInt = inputArray[i].length;
      result = [];
      result.push(inputArray[i]);
    } else if (inputArray[i].length === longestInt) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

// input: array of strings
// output: array containing all longest string
// i.e. -- longest is three letters should return all 3 letter strings
// order SHOULD be preserved

// declare output array for storing result
// declare longestInt for storing longest integer
// iterate through the inputArray
// if the current string is longer than longest integer clear result
// add the current string to result
// if the current string is the same length add it to result
// if the current string is shorter keep iterating (do nothing)
// when finished iterating, return result
