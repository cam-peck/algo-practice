function SnakesLadders() {
  this.nextPlayer = 0;
  this.players = [];
  this.currentPlayer = '';
  this.gameIsOver = false;
}

SnakesLadders.prototype.addPlayer = function (name) { // adds a player to the game
  this.players.push({ name, square: 0 });
};

SnakesLadders.prototype.getCurrentPlayerSquare = function () {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].name === this.currentPlayer) {
      return this.players[i].square;
    }
  }
};

SnakesLadders.prototype.changePlayer = function () {
  const currentPlayerIndex = this.players.findIndex(player => player.name === this.currentPlayer);
  if (currentPlayerIndex + 1 === this.players.length) {
    this.currentPlayer = this.players[0].name;
  } else {
    this.currentPlayer = this.players[currentPlayerIndex + 1].name;
  }
  for (let i = 0; i < this.players.length; i++) {
    if (i === currentPlayerIndex) {
      return `${this.players[i].name} is on square ${this.players[i].square}`;
    }
  }
};

SnakesLadders.prototype.move = function (squaresToMove) {
  if (this.currentPlayer === '') {
    this.currentPlayer = this.players[0].name;
  }
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].name === this.currentPlayer) {
      this.players[i].square += squaresToMove;
    }
  }
};

SnakesLadders.prototype.moveBack = function (squaresToMove) {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].name === this.currentPlayer) {
      const startingSquare = this.players[i].square - squaresToMove;
      const difference = 100 - startingSquare;
      const squaresBack = squaresToMove - difference;
      this.players[i].square = 100 - squaresBack;
    }
  }
};

SnakesLadders.prototype.checkSnakes = function () {
  const snakes = [
    { head: 99, tail: 80 },
    { head: 95, tail: 75 },
    { head: 92, tail: 88 },
    { head: 89, tail: 68 },
    { head: 74, tail: 53 },
    { head: 64, tail: 60 },
    { head: 62, tail: 19 },
    { head: 49, tail: 11 },
    { head: 46, tail: 25 },
    { head: 16, tail: 6 }
  ];
  for (let i = 0; i < snakes.length; i++) {
    for (let j = 0; j < this.players.length; j++) {
      if (this.players[j].name === this.currentPlayer) {
        if (snakes[i].head === this.players[j].square) {
          this.players[j].square = snakes[i].tail;
        }
      }
    }
  }
};

SnakesLadders.prototype.checkLadders = function () {
  const ladders = [
    { bottom: 78, top: 98 },
    { bottom: 87, top: 94 },
    { bottom: 71, top: 91 },
    { bottom: 51, top: 67 },
    { bottom: 28, top: 84 },
    { bottom: 36, top: 44 },
    { bottom: 21, top: 42 },
    { bottom: 15, top: 26 },
    { bottom: 8, top: 31 },
    { bottom: 7, top: 14 },
    { bottom: 2, top: 38 }
  ];
  for (let i = 0; i < ladders.length; i++) {
    for (let j = 0; j < this.players.length; j++) {
      if (this.players[j].name === this.currentPlayer) {
        if (ladders[i].bottom === this.players[j].square) {
          this.players[j].square = ladders[i].top;
        }
      }
    }
  }
};

SnakesLadders.prototype.checkForWin = function () {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].name === this.currentPlayer) {
      if (this.players[i].square === 100) {
        this.gameIsOver = true;
        return true;
      } else return false;
    }
  }
};

SnakesLadders.prototype.checkForOvershoot = function () {
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].name === this.currentPlayer) {
      if (this.players[i].square > 100) {
        return true;
      } else return false;
    }
  }
};

SnakesLadders.prototype.play = function (die1, die2) {
  // Add players to game //
  if (this.players.length === 0) {
    this.addPlayer('Player 1');
    this.addPlayer('Player 2');
  }

  // Check if game is over //

  if (this.gameIsOver) {
    return 'Game over!';
  }

  // Player moves //
  this.move(die1 + die2);
  if (this.checkForWin()) {
    return `${this.currentPlayer} Wins!`;
  }
  if (this.checkForOvershoot()) {
    this.moveBack(die1 + die2);
  }

  // Check for ladders & snakes //
  this.checkLadders();
  this.checkSnakes();

  // Check for next round
  if (die1 === die2) {
    return `${this.currentPlayer} is on square ${this.getCurrentPlayerSquare()}`;
  }
  return this.changePlayer();
};
