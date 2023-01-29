
/* eslint-disable no-unused-vars */
function solution(inputArray, k) {
  const checkAgainst = {};
  const result = [];
  for (let i = (k - 1); i < inputArray.length; i += k) {
    checkAgainst[i] = true;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (!checkAgainst[i]) {
      result.push(inputArray[i]);
    }
  }
  return result;
}

// indexesToRemove= [];
// arrayLength = 10 --> every 3rd --> 2, 5, 8

// SPLICE EM
// WALKTRHOUGH //

// k = 3

// i = 2

// inputArray[2]
// inputArray[5]
// inputArray[8]

// iterate again, add numbers that AREN'T THESE into empty array
