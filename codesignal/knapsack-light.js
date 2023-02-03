// eslint-disable-next-line no-unused-vars
function solution(value1, weight1, value2, weight2, maxW) {
  const weightSum = weight1 + weight2;
  if (weightSum <= maxW) return value1 + value2; // both items OK!
  if (weight1 <= maxW) { // weight1 cases
    if (weight2 > maxW) return value1;
    else {
      if (value2 > value1) return value2;
      else return value1;
    }
  }
  if (weight2 <= maxW) { // weight2 cases
    if (weight1 > maxW) return value2;
    else {
      if (value1 > value2) return value1;
      else return value2;
    }
  }
  return 0;
}

// find max value of items assuming max weight is maxW
// you can't bring more than one item of each type
