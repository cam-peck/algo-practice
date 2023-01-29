/* eslint-disable no-unused-vars */

function solution(deposit, rate, threshold) {
  let total = deposit;
  let years = 0;
  while (total < threshold) {
    years++;
    total += (total * rate / 100);
  }
  return years;
}

// input: deposit (initial money), rate (increase %), threshold (goal money)
// output: integer representing number of years to get to threshold

// initialize total variable as deposit
// initialize years variable at 0
// use a while loop --> while total < threshold
// multiply total by rate
// check if above threshold --> if so , return years
// if not, keep going
