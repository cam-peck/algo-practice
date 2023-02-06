// eslint-disable-next-line no-unused-vars
function solution(n) {
  const stringN = String(n);
  if (stringN.length === 1) return 0;
  let currentString = stringN;
  let tempSum = 0;
  let counter = 0;
  while (currentString.length !== 1) {
    counter++;
    for (let i = 0; i < currentString.length; i++) {
      tempSum += Number(currentString[i]);
    }
    const stringTempSum = String(tempSum);
    tempSum = 0;
    currentString = stringTempSum;
  }
  return counter;
}

// if n.length is 1, return 0;
// declare a variable tempSum
// declare a variable counter
// otherwise, iterate through n, incrementing counter by 1 each time
// convert each index to a number, and add the sums to tempSum
// when finished iterating, if tempSum.length is 1, return coutner
// otherwise iterate through tempSum until length is one & return counter
