function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) smallestIndex = j;
    }
    if (i !== smallestIndex) { // found a new min
      swap(arr, i, smallestIndex);
    }
  }
  return arr;
}

const testArray = [11, 6, 3, 18, 1, 45, 9, 813, 52];
const result = selectionSort(testArray);

// eslint-disable-next-line no-console
console.log('Result: ', result);
