import Game from '../game';


describe('Game', () => {
  let game;
  const move = {col: 0, row: 2}
  const [row,col] = [2,0];

  beforeEach(() => {
    game = new Game();
  });

  it('should create a game with an empty board', () => {
    expect(game.board).toEqual([
            [undefined,undefined,undefined],
            [undefined,undefined,undefined],
            [undefined,undefined,undefined]
          ]);
  });

  it('should create a game with x as default player turn', () => {
    expect(game.turn).toBe('x');
  });

  it('should create a game an empty move history', () => {
    expect(game.moveHistory).toEqual([]);
  });

  it('should place tokens at the specified location', () => {
    expect(game.board[row][col]).toBe(undefined);
    game.insertToken(row,col);
    expect(game.board[row][col]).toBe('x');
  })

  it('should not place a token if the cell is already taken', () => {
    expect(game.board[row][col]).toBe(undefined);
    game.insertToken(row,col);
    expect(game.board[row][col]).toBe('x');
    game.insertToken(row,col);
    expect(game.board[row][col]).not.toBe('o');
    expect(game.turn).toBe('o');
    expect(game.moveHistory.length).toBe(1);
  })

  it('should record token placements in history', () => {
    expect(game.moveHistory).toEqual([]);
    game.insertToken(move.row,move.col);
    expect(game.moveHistory.length).toBe(1);
    expect(game.moveHistory[0]).toEqual(move);
  })


  it('should be able to rewind moves',() => {
    const turn = game.turn;
    expect(game.board[move.row][move.col]).toBe(undefined);
    game.insertToken(move.row,move.col);
    expect(game.board[move.row][move.col]).toBe(turn);
    game.rewindMove();
    expect(game.board[move.row][move.col]).toBe(undefined);
  })

  it('can switch turns', () => {
    expect(game.turn).toBe('x');
    game.switchTurns();
    expect(game.turn).toBe('o');
  })

  it('can determine if the game is won', () => {
    expect(game.isGameWon()).not.toBe(true);
    game.board[0] = ['x','x','x'];
    expect(game.isGameWon()).toBe(true);
  })

  it('can determine if the game is draw', () => {
    expect(game.isGameDraw()).toBe(false);
    game.moveHistory = Array(9); //fake 9 complete moves
    expect(game.isGameDraw()).toBe(true);
  })

  it('can determine if the board contains a row with identical tokens', () => {
    expect(game.checkRows()).toBe(false);
    game.board[0] = ['x', 'x', 'x'];
    expect(game.checkRows()).toBe(true);
  })

  it('can determine if the board contains a column with identical tokens', () => {
    expect(game.checkCols()).toBe(false);
    game.board[0] = ['x', undefined, undefined];
    game.board[1] = ['x', undefined, undefined];
    game.board[2] = ['x', undefined, undefined];
    expect(game.checkCols()).toBe(true);
  })

  it('can determine if the board contains a matching diagonal', () => {
    expect(game.checkDiagonals()).toBe(false);
    game.board[0] = ['x', undefined, undefined];
    game.board[1] = [undefined,'x', undefined];
    game.board[2] = [undefined, undefined, 'x'];
    expect(game.checkDiagonals()).toBe(true);
  })

  it('can determine an array contains same values', () => {
    expect(game.allEqual(['x','x','o'])).not.toBe(true);
    expect(game.allEqual(['x','x','x'])).toBe(true);
  })

  it('can determine all possible moves are made', () => {
    expect(game.allMovesMade()).not.toBe(true);
    game.moveHistory = Array(9); // fake 9 recorded moves
    expect(game.allMovesMade()).toBe(true);
  })


});
