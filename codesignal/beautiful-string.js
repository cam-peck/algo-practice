// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const map = new Map();
  for (let i = 0; i < inputString.length; i++) {
    if (map.has(inputString[i])) {
      map.set(inputString[i], (map.get(inputString[i])) + 1);
    } else {
      map.set(inputString[i], 1);
    }
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let previousValue = 0;
  let checkedFirstValue = false;
  for (let i = 0; i < alphabet.length; i++) {
    const currentCheckingLetter = alphabet[i]; // b
    if (map.has(currentCheckingLetter)) {
      const storedLetterCount = map.get(currentCheckingLetter); // 2
      if (storedLetterCount > previousValue && checkedFirstValue) return false;
      previousValue = storedLetterCount;
    } else {
      map.set(currentCheckingLetter, 0);
      previousValue = 0;
    }
    if (!checkedFirstValue) checkedFirstValue = true;
  }
  return true;
}
