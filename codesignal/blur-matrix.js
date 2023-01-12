// eslint-disable-next-line no-unused-vars
function solution(image) {
  let rowIsDone = false;
  let columnIsDone = false;
  const result = [];
  let startX = 0;
  let stopX = 3;
  let startY = 0;
  let stopY = 3;
  while (!columnIsDone) {
    const rowResult = [];
    while (!rowIsDone) {
      let currentSum = 0;
      for (let i = startY; i < stopY; i++) {
        for (let j = startX; j < stopX; j++) {
          currentSum += image[i][j];
        }
      }
      // push to result
      rowResult.push(Math.floor(currentSum / 9));
      // check if done
      // if not done get new start and stop
      if (stopX !== image[0].length) {
        startX++;
        stopX++;
      } else {
        rowIsDone = true;
      }
    }
    result.push(rowResult);
    if (stopY === image.length) {
      columnIsDone = true;
      return result;
    }
    startX = 0;
    stopX = 3;
    startY++;
    stopY++;
    rowIsDone = false;
  }
}

// input: matrix up to 100 x 100 w/ values between 0 and 255
// output: a matrix with the center of all 3 x 3 matrices after blur algo

// get the sub-matrices
// check if length is longer than 3
// if it is, divide the matrix up, have to check BOTH directions
// if length is 4, need...
// matrix[0] --> matrix[2]
// matrix[1] --> matrix[3]
// if length is 6, need...
// matrix[0] --> matrix[2]
// matrix[3] --> matrix[5]
// if length is 13
// matrix[0] --> matrix[2]
// matrix[3] --> matrix[5]
// matrix[6] --> matrix[8]
// matrix[9] --> matrix[11]
// matrix[11] --> matrix[13]
