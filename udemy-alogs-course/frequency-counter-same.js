// eslint-disable-next-line no-unused-vars
function sameFrequency(num1, num2) {
  const num1Counter = {};
  const stringNum1 = String(num1);
  const stringNum2 = String(num2);
  if (stringNum1.length !== stringNum2.length) return false;
  for (let i = 0; i < stringNum1.length; i++) {
    if (!num1Counter[stringNum1[i]]) {
      num1Counter[stringNum1[i]] = 1;
    } else num1Counter[stringNum1[i]]++;
  }
  for (let j = 0; j < stringNum2.length; j++) {
    if (!num1Counter[stringNum2[j]]) {
      return false;
    }
    if (num1Counter[stringNum2[j]]) {
      num1Counter[stringNum2[j]]--;
    }
  }
  return true;
}

// input: two nums
// output: bool t / f
// create an object with the frequencies of appearance in num1
// iterate through num2
// check if that num exists in num1
// if it does, subtract 1
// if it doesn't return false
// if we make it all the way, return true b/c nums are the same
