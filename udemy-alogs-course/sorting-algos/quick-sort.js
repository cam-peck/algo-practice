function pivot(arr, startIndex = 0, endIndex = arr.length + 1) {
  const pivot = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, startIndex, pivotIndex);
  return pivotIndex;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotPoint = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotPoint - 1);
    // right
    quickSort(arr, pivotPoint + 1, right);
  }
  return arr;
}

const testData = [15, 84, 14, 15, 7, 101, 25];

const result = quickSort(testData);

// eslint-disable-next-line no-console
console.log('Result: ', result);
