let a_w;
let columns;
let rows;
let board;
let next;

function setup() {
  createCanvas(600, 400);
  a_w = 20;
  // Calculate columns and rows
  columns = floor(width / a_w);
  rows = floor(height / a_w);
  // Wacky way to make a 2D array is JS
  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  // Going to use multiple 2D arrays and swap them
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  background(255);
  generate();
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if ((board[i][j] == 1)) fill(0);
      else fill(255);
      stroke(0);
      rect(i * a_w, j * a_w, a_w - 1, a_w - 1);
    }
  }
}

// reset board when mouse is pressed
function mousePressed() {
  init();
}

// Fill board randomly
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      // Lining the edges with 0s
      if (i == 0 ||
        j == 0 ||
        i == columns - 1 ||
        j == rows - 1) {
        board[i][j] = 0;
      }
      // Filling the rest randomly
      else {
        board[i][j] = floor(random(2));
      }
      next[i][j] = 0;
    }
  }
}

// The process of creating the new generation
function generate() {
  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x + i][y + j];
        }
      }
      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if ((board[x][y] == 1) && (neighbors < 2))
        next[x][y] = 0; // Loneliness
      else if ((board[x][y] == 1) && (neighbors > 3))
        next[x][y] = 0; // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3))
        next[x][y] = 1; // Reproduction
      else
        next[x][y] = board[x][y]; // Stasis
    }
  }
  // Swap!
  let temp = board;
  board = next;
  next = temp;
}

// https://p5js.org/examples/simulate-game-of-life.html

// https://www.conwaylife.com/patterns/glider.cells
// !Name: Glider
// !Author: Richard K. Guy
// !The smallest, most common, and first discovered spaceship.
// !www.conwaylife.com/wiki/index.php?title=Glider
// .O
// ..O
// OOO

// https://www.conwaylife.com/wiki/Noah%27s_ark
// !Name: Noah's ark
// !Author: Charles Corderman
// !A diagonal puffer made up of two switch engines that was found in 1971.
// !www.conwaylife.com/wiki/index.php?title=Noah's_ark
// ..........O.O
// .........O
// ..........O..O
// ............OOO
//
//
//
//
//
// .O
// O.O
//
// O..O
// ..OO
// ...O