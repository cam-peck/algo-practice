// eslint-disable-next-line no-unused-vars
function solution(name) {
  const regex = /\d/;
  if (regex.test(name[0])) {
    return false;
  }
  const splitName = name.split('');
  const alphaNumRegex = /^[A-Za-z0-9]*$/;
  for (let i = 0; i < splitName.length; i++) {
    if (splitName[i] !== '_') {
      if (!alphaNumRegex.test(splitName[i])) {
        return false;
      }
    }
  }
  return true;
}
