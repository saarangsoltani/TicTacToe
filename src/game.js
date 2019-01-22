export default class TicTacToeGame {
  constructor(){
    this.turn = 'x';
    this.board = this.initBoard();
    this.moveHistory = [];
  }
  initBoard() {
    let boardMatrix = [];
    for(let i=0; i<3; i++) {
      boardMatrix[i] = [...new Array(3)];
    }
    return boardMatrix;
  }
  insertToken(x,y){
    if(this.board[x][y] === undefined && !this.isGameWon()){
      this.board[x][y] = this.turn;
      this.recordMove(x,y);
      if(!this.isGameWon()) this.switchTurns();
    }
  }
  recordMove(row,col){
    this.moveHistory.push({row,col});
  }
  rewindMove(){
    if(!this.moveHistory.length) return;
    if(!this.isGameWon()) this.switchTurns();
    let lastMove = this.moveHistory.pop();
    this.board[lastMove.row][lastMove.col] = undefined;
  }
  switchTurns(){
    this.turn = (this.turn === 'x' ? 'o' : 'x');
  }
  isGameWon(){
    return this.checkCols() || this.checkRows() || this.checkDiagonals();
  }
  isGameDraw(){
    return (this.allMovesMade() && ! this.isGameWon() );
  }
  checkRows(){
    return this.board.some((row) => this.allEqual(row));
  }
  checkCols(){
    let ar = this.board;
    let cols = ar[0].map( (_, c) => ar.map( (r) => r[c]));
    return cols.some((col) => this.allEqual(col));
  }
  checkDiagonals(){
    let board = this.board;
    let diagonals = [
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]]
    ];
    return diagonals.some((diagonal) => this.allEqual(diagonal));
  }
  allEqual(array){
    if (array[0] === undefined) return false;
    return array.every((el)=> el === array[0]);
  }
  allMovesMade(){
    return this.moveHistory.length === 9;
  }

}
