
// eslint-disable-next-line no-unused-vars
function solution(n, firstNumber) {
  const result = firstNumber + (n / 2);
  if (result === n) return 0;
  if (result > n - 1) {
    return result - n;
  } return result;
}

// n : 10
// firstNum : 7

//
