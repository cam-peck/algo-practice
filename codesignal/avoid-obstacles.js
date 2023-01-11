// eslint-disable-next-line no-unused-vars
function solution(inputArray) {
  let checking = 1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[0] % checking === 0) {
      checking++;
      i = 0;
    }
    if (inputArray[i] % checking === 0) {
      checking++;
      i = 0;
    }
  }
  return checking;
}

// input: unsorted array of numbers between 1 -> 1000
// output: integer representing minimum jump length to clear course

// sort the array
// deals with divisors
// iterate through the array checking if each number is divisible by x
// increment x by 1 each time
