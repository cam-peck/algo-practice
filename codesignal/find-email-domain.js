// eslint-disable-next-line no-unused-vars
function solution(address) {
  const splitAddress = address.split('@');
  return splitAddress[splitAddress.length - 1];
}
