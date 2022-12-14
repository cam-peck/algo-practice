function isSolved(board) {

  // Get positions of current board state //
  const xPositions = [];
  const oPositions = [];
  let zeroCoutner = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        xPositions.push(`${i}[${j}]`);
      } else if (board[i][j] === 2) {
        oPositions.push(`${i}[${j}]`);
      } else {
        zeroCoutner++;
      }
    }
  }

  // Intialize win object //
  const winConditions = {
    acrossWin: ['0[0]', '0[1]', '0[2]'],
    acrossWin2: ['1[0]', '1[1]', '1[2]'],
    acrossWin3: ['2[0]', '2[1]', '2[2]'],
    downWin: ['0[0]', '1[0]', '2[0]'],
    downWin2: ['0[1]', '1[1]', '2[1]'],
    downWin3: ['0[2]', '1[2]', '2[2]'],
    diagWin: ['0[0]', '1[1]', '2[2]'],
    diagWin2: ['0[2]', '1[1]', '2[0]']
  };

  // Iterate through win object //
  for (const key in winConditions) {
    let xCounter = 0;
    let oCounter = 0;
    for (let i = 0; i < winConditions[key].length; i++) {
      if (xPositions.includes(winConditions[key][i])) {
        xCounter++;
      } else if (oPositions.includes(winConditions[key][i])) {
        oCounter++;
      }
    }

    // Check for wins //
    if (xCounter === 3) { // x-win
      return 1;
    } else if (oCounter === 3) { // o-win
      return 2;
    }
    xCounter = 0;
    oCounter = 0;
  }

  // Once finished, check the zeroes! //
  if (zeroCoutner === 0) return 0;
  else return -1;
}

const board =
[[1, 2, 1],
  [2, 1, 2],
  [2, 2, 1]];

isSolved(board);
// check for wins
// if someone has won, return that winner
// else if no zeroes--> return draw
// else if zeroes --> return unfinished

// win conditions
// all indexes of one array (0[0], 0[1], 0[2])
// same index of each array (0[1], 1[1], 2[1])
// diagonal case --> (0[0], 1[1], 1[2]) OR (0[2], 1[1], 2[0])
