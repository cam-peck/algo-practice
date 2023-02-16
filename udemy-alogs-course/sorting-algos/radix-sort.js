function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function radixSort(numArray) {
  // find the number with the maximum digit count //
  let maxDigitCount = 0;
  numArray.forEach(num => {
    const currentNumDigitCount = digitCount(num);
    if (currentNumDigitCount > maxDigitCount) {
      maxDigitCount = currentNumDigitCount;
    }
  });

  // loop through the array, making the buckets //
  let currentArray = numArray;
  for (let i = 0; i < maxDigitCount; i++) {
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < currentArray.length; j++) {
      const digitToSortBy = getDigit(currentArray[j], i);
      buckets[digitToSortBy].push(currentArray[j]);
    }
    currentArray = [].concat(...buckets);
  }
  return currentArray;
}

const testData = [9732, 334, 7, 34, 8873, 6, 89, 12, 10, 465, 88, 8879];

// eslint-disable-next-line no-console
console.log(radixSort(testData));
