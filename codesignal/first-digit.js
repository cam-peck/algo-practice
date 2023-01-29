/* eslint-disable no-unused-vars */
function solution(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i]) && inputString[i] !== ' ') {
      return inputString[i];
    }
  }
  return false;
}
