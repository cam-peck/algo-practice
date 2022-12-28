function solution(n) {
  const stringN = String(n);
  const splitN = stringN.split('');
  const halfway = splitN.length / 2;
  const subarray1 = splitN.slice(halfway);
  const subarray2 = splitN.slice(0, halfway);
  let sub1Sum = 0;
  let sub2Sum = 0;
  for (let i = 0; i < subarray1.length; i++) {
    sub1Sum += Number(subarray1[i]);
    sub2Sum += Number(subarray2[i]);
  }
  return sub1Sum === sub2Sum;
}

// input: n (number)
// output: bool t/f
// return true if number is "lucky" (sum of first half = sum of second half)

// convert n to string
// use split to get an array with each of the numbers at an index
// split the array into 2 subarrays of equal length
// iterate through each array, converting each string to a number and getting the sum
// if the two subarrays are the same value, return true
// else return false
