function solution(inputStr) {
  // TRACKING OBJECT //
  const tracker = {};
  let oddFound = false;
  for (let i = 0; i < inputStr.length; i++) {
    if (!tracker[inputStr[i]]) {
      tracker[inputStr[i]] = 1;
    } else {
      tracker[inputStr[i]]++;
    }
  }
  // EVEN CASE //
  if (inputStr.length % 2 === 0) {
    for (const key in tracker) {
      if (tracker[key] % 2 !== 0) {
        return false;
      }
    }
    return true;
  }
  // ODD CASE //
  else {
    for (const key in tracker) {
      if (tracker[key] % 2 !== 0) {
        if (oddFound) {
          return false;
        } else oddFound = true;
      }
    }
    if (oddFound) return true;
  }
  return false;
}

// input: string
// output: bool t / f

// two cases, either even number or letters or odd number
// even number pivots around middle 2 letters
// hence, we need 2n of every letter
// odd number pivots around middle 1 letter
// hence, we need 2n of every letter AND EITHER
// a 2n + 1 copy of that letter
// OR if the length if 3, a single copy of the unique letter
