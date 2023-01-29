/* eslint-disable no-unused-vars */
function solution(string) {
  let seen = '';
  for (let i = 0; i < string.length; i++) {
    if (!seen.includes(string[i])) {
      seen += string[i];
    }
  }
  return seen.length;
}
