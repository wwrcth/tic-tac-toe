class TicTacToe {
    constructor() {
      this.x = 'x';
      this.o = 'o';
      this.current = this.x;
      this.field = new Array(3);
      this.field.fill(null);
      this.field = this.field.map(x => {
        return new Array(3).fill(null)
      });
    }

    getCurrentPlayerSymbol() {
      return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.field[rowIndex][columnIndex]) {
        this.field[rowIndex][columnIndex] = this.current;
        if(this.current === this.x) {
          this.current = this.o;
        } else {
          this.current = this.x;
        }
      }
    }

    isFinished() {
      return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
      var winner = null;

      for (var i = 0; i < 3; i++) {
        if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
          winner = this.field[i][0];
        }

        if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
          winner = this.field[0][i];
        }
      }

      if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
        winner = this.field[0][0];
      }

      if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]){
        winner = this.field[0][2];
      }

      return winner;
    }

    noMoreTurns() {
      var counter = 0;
      for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++) {
          if (this.field[i][j] === null) {
            counter++;
          }
        }
      }
      if (counter === 0) {
        return true;
      } else {
        return false;
      }
    }

    isDraw() {
      return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
