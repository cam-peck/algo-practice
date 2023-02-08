function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {

    const currentValue = arr[i];

    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {

      arr[j + 1] = arr[j];

    }

    arr[j + 1] = currentValue;

  }

  return arr;

}

const testData = [15, 84, 14, 15, 7, 101, 25];

// eslint-disable-next-line no-console
console.log(insertionSort(testData));
