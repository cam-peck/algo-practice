// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') result += 'a';
    else {
      const currentCode = inputString.charCodeAt([i]);
      const nextLetter = String.fromCharCode(currentCode + 1);
      result += nextLetter;
    }
  }
  return result;
}

// input: non-empty string of lowercase letters
// output: string

// declare variable to hold output
// iterate through input string
// grab char code of current index, add one, convert to letter, add to output
// handle z edge case
// return output
