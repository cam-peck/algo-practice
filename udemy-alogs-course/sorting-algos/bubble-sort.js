const input = [54, 3, 11, 65, 8];

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let swapped;
  for (let i = arr.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

// eslint-disable-next-line no-console
console.log(bubbleSort(input));
