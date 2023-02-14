// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const validCharacters = {
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true
  };
  if (inputString.length !== 17) return false; // not the correct length
  let hyphenCounter = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (hyphenCounter === 2) {
      if (inputString[i] !== '-') return false;
      hyphenCounter = 0;
    } else {
      if (!validCharacters[inputString[i]]) return false;
      hyphenCounter++;
    }
  }
  return true;
}

// standard format is six groups of two hexademical digits seperated by hyphens
// hex is 0-9 and a - f
// GOAL: check if given inputString corresponds to MAC-48 address or not

// input: string
// output bool t / f
