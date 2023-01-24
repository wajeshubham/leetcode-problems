/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  let length = board.length; // get reference of the length of the board
  let visited = new Set(); // to keep track of the visited cells
  board.reverse(); // reverse the board so that we traverse top to bottom not bottom to top
  function intToPos(square) {
    // get row and col based on square we are on
    let row = Math.floor((square - 1) / length); // for example: if we are on square 16 we will be on row: Math.floor(16 - 1 / 6) = 2 (0 indexed row i.e. 3rd row)
    let col = (square - 1) % length; // for example: if we are on square 16 we will be on col: 16 - 1 % 6 = 3 (0 indexed col i.e 4th col)

    if (row % 2 == 1) {
      // because the board is going in alternate direction for each row we want to flip position column number for each row with odd index
      col = length - 1 - col; // if we want to go to 7, the previous col value is (7 - 1 % 6) = 0 but as it is an odd row. So, we need to start at the end. See the following diagram.
      //12 <- 11 <- 10 <- 9 <- 8 <- 7 (column for 7 is 5 (0 indexed) but if we calculate based on (square - 1) % length it calculates to 0 so we subtract it from the board length to flip)
      //                            |(up)
      // 1 -> 2 -> 3 -> 4 -> 5 ->  6
      // so we subtract old col with (length - 1) so we get (6 - 1 - 0) = 5 (0 indexed col) which is correct if you see the board image for example 1 on leetcode (link in the README.md)
    }
    // we return row and col for required square
    return [row, col];
  }

  // We are approaching this with BFS

  let queue = [[1, 0]]; // we start at square 1 with 0 moves played (typeof queue: [square, moves][])

  // while our queue is still filled
  while (queue.length) {
    // destructure the oldest move we played
    let [square, moves] = queue.shift();
    // 7 because we have dice with 1 - 6 values and 7 being exclusive
    for (let diceVal = 1; diceVal < 7; diceVal++) {
      // next square will be currentSquare plus diceVal
      let nextSquare = square + diceVal;
      let [row, col] = intToPos(nextSquare); // get the position of the next square

      // if next square has value NOT equal to -1 that means it is either ladder or snake
      if (board[row][col] !== -1) {
        // so the nextSquare becomes the square based on if it is snake or ladder
        nextSquare = board[row][col];
      }
      if (nextSquare === length * length) {
        // if nextSquare is length^2 that means we have reached to the end
        // so we return moves + 1. We must have to play at least one move to reach to the end because question says that **Squares `1` (start) and `n^2`(end) do not have a snake or ladder.**
        return moves + 1;
      }
      if (!visited.has(nextSquare)) {
        // if the square we are on is not visited we put it in our visited set so that we don't iterate over it again
        visited.add(nextSquare);
        // then push that into our queue
        queue.push([nextSquare, moves + 1]);
      }
    }
  }
  // if we cannot reach to the end we return -1
  return -1;
};
