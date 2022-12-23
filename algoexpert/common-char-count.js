const { result } = require('lodash');

function solution(s1, s2) {
  let resultCounter = 0;
  const obj = {};
  for (let i = 0; i < s1.length; i++) {
    if (!obj[s1[i]]) {
      obj[s1[i]] = 1;
    } else {
      obj[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (obj[s2[i]] > 1) {
      resultCounter++;
      obj[s2[i]]--;
    } else if (obj[s2[i]] === 1) {
      resultCounter++;
      delete obj[s2[i]];
    }
  }
  return resultCounter;
}

// input: two strings
// output: number of common chars

// grab all of the unique letters from string 1 and store in object
// iterate through string 2, checking if those letters are in the object
// if they are, increment the result counter by 1
// when finished iterating, return the result counter
