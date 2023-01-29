/* eslint-disable no-unused-vars */

function solution(A) {
  return A[Math.ceil(A.length / 2) - 1];
}

// input: array of integers (can have negs and zeros) - no decimals -- sorted
// output: one integer representing the smallest difference

// iterate through the input array
// checking [0]
// check every other index except 0
// store that value in an object outside the loop
// let index = 0
// let sum = 42
// checking [1]
// check every other index except 1
// check if sum at 1 > sum stored
// if it is, replace index with current index
// if it isn't keep iterating
