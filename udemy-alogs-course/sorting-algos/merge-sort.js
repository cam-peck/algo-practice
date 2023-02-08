function merge(arr1, arr2) {

  const result = [];

  let arr1Pointer = 0;

  let arr2Pointer = 0;

  // handle initial cases //

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {

    if (arr1[arr1Pointer] < arr2[arr2Pointer]) { // array 1 value is smaller

      result.push(arr1[arr1Pointer]);

      arr1Pointer++;

    } else { // array 2 value is smaller OR they're the same

      result.push(arr2[arr2Pointer]);

      arr2Pointer++;

    }

  }

  // handle leftover number cases //

  if (arr1Pointer !== arr1.length) { // leftover values in array 1

    for (let i = arr1Pointer; i < arr1.length; i++) {

      result.push(arr1[i]);

    }

  }

  if (arr2Pointer !== arr2.length) { // leftover values in array 2

    for (let i = arr2Pointer; i < arr2.length; i++) {

      result.push(arr2[i]);

    }

  }

  return result;

}

function mergeSort(array) {

  if (array.length <= 1) return array;

  const halfway = Math.floor(array.length / 2);

  const firstHalf = mergeSort(array.slice(0, halfway));

  const secondHalf = mergeSort(array.slice(halfway));

  return merge(firstHalf, secondHalf);

}

const array1 = [1, 6, 7, 11, 15, 5, 8, 10, 14, 16];

// eslint-disable-next-line no-console
console.log(mergeSort(array1));
