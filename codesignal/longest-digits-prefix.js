// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const left = 0;
  let right = 1;
  const digitRegex = /\d/;
  if (!digitRegex.test(inputString[left])) {
    return '';
  }
  if (!digitRegex.test(inputString[right])) {
    return inputString[0];
  }
  right++;
  while (right < inputString.length) {
    if (digitRegex.test(inputString[right])) {
      right++;
    } else return inputString.slice(0, right);
  }
  return inputString;
}

// set two pointers next to each other
// check that both pointers are nums
// keep moving right pointer up until its not a num
// return the section with only nums
