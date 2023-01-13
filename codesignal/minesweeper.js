// eslint-disable-next-line no-unused-vars
function solution(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const currentRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;

      // top //
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j]) {
          counter++;
        }
      }

      // bottom //
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j]) {
          counter++;
        }
      }

      // left //
      if (matrix[i][j - 1] !== undefined) {
        if (matrix[i][j - 1]) {
          counter++;
        }
      }

      // right //
      if (matrix[i][j + 1] !== undefined) {
        if (matrix[i][j + 1]) {
          counter++;
        }
      }

      // top-right
      if (matrix[i - 1] !== undefined && matrix[i - 1][j + 1] !== undefined) {
        if (matrix[i - 1][j + 1]) {
          counter++;
        }
      }

      // top-left
      if (matrix[i - 1] !== undefined && matrix[i - 1][j - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          counter++;
        }
      }

      // bottom-right
      if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1] !== undefined) {
        if (matrix[i + 1][j + 1]) {
          counter++;
        }
      }

      // bottom-left
      if (matrix[i + 1] !== undefined && matrix[i + 1][j - 1] !== undefined) {
        if (matrix[i + 1][j - 1]) {
          counter++;
        }
      }

      // push to result //
      currentRow.push(counter);
    }
    result.push(currentRow);
  }
  return result;
}

// move through each boolean in the matrix
// check all surrounding squares for true values and count them up
// push the true value counter into a result array with the same structure as input matrix
// when finished iterating, return the result array
