// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const splitInputString = inputString.split('.');
  const abcRegex = /[A-Za-z]/;
  if (splitInputString.length !== 4) {
    return false;
  }
  for (let i = 0; i < splitInputString.length; i++) {
    if (splitInputString[i] === '') {
      return false;
    }
    if (splitInputString[i].includes('0') && splitInputString[i].length > 1) {
      return false;
    }
    if (abcRegex.test(splitInputString[i])) {
      return false;
    }
    if (parseInt(splitInputString[i]) > 255 || parseInt(splitInputString[i]) < 0) {
      return false;
    }
  }
  return true;
}
