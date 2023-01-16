// eslint-disable-next-line no-unused-vars
function solution(cell1, cell2) {
  const startsBrown = {
    A: true,
    C: true,
    E: true,
    G: true
  };
  const startsTan = {
    B: true,
    D: true,
    F: true,
    H: true
  };
  if ((startsBrown[cell1[0]] && startsBrown[cell2[0]]) || (startsTan[cell1[0]] && startsTan[cell2[0]])) { // same color
    if (cell1[1] % 2 === 0) { // cell 1 is even
      if (cell2[1] % 2 === 0) {
        return true;
      }
    } else if (cell1[1] % 2 !== 0) { // cell 1 is odd
      if (cell2[1] % 2 !== 0) {
        return true;
      }
    }
    return false;
  } else { // cells are different colors
    if (cell1[1] % 2 === 0) { // cell 1 is even
      if (cell2[1] % 2 !== 0) {
        return true;
      }
    } else if (cell1[1] % 2 !== 0) { // cell 1 is odd
      if (cell2[1] % 2 === 0) {
        return true;
      }
    }
    return false;
  }
}

// input: string of two chess board squares
// output: bool t / f

// create objects with starting square color
// split the input string into a letter and number part
// determine if the column that square starts in is brown or tan
// if both cells start in a column with the same color, both numbers need to be even or both need to be odd
// if the cells start in a column with a different color, one number must be even and the other must be odd
