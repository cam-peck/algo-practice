function solution(inputArr) {
  let counter = 0;
  for (let i = 0; i < inputArr.length - 1; i++) {
    while (inputArr[i + 1] <= inputArr[i]) {
      counter++;
      inputArr[i + 1] += 1;
    }
  }
  return counter;
}

// iterate through inputArray
// check if next index is increasing
// if it is, no problem!
// if it isn't,
// while next value is less than or equal to current value
// increment counter by 1
// add one to the value at next index
// when finished iterating, return counter
