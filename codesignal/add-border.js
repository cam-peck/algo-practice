function solution(picture) {
  const rowLength = picture[0].length + 2;
  const result = [];
  // first row
  let row1 = '';
  let finalRow = '';
  for (let i = 0; i < rowLength; i++) {
    row1 += '*';
    finalRow += '*';
  }
  result.push(row1);
  // middle rows
  for (let i = 0; i < picture.length; i++) {
    let middleRow = '*';
    console.log('checking: ', i);
    middleRow += picture[i];
    middleRow += '*';
    result.push(middleRow);
  }
  // final row
  result.push(finalRow);
  return result;
}

// add a row of astricks of length (picture + 2) at index 0
// add an astrick onto the front and back end of middle indexes
// add a row of astricks of length (picture + 2) at final index
// return the array
