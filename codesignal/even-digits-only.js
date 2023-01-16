// eslint-disable-next-line no-unused-vars
function solution(n) {
  const stringN = String(n);
  for (let i = 0; i < stringN.length; i++) {
    if (stringN[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
