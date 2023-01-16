// eslint-disable-next-line no-unused-vars
function countUniqueValues(input) {
  let checkAgainst = 0;
  let checking = 1;
  let counter = 1;
  if (input.length === 0) {
    return 0;
  }
  while (checking < input.length) {
    if (input[checkAgainst] === input[checking]) { // same number
      checking++;
    } else {
      counter++;
      checkAgainst = checking;
      checking++;
    }
  }
  return counter;
}
