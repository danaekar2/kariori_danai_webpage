let gridData;

function setup() {
  createCanvas(600, 600);
  noStroke();
  gridData = createGrid(4, 4); 
  drawGrid(gridData);
}

function createGrid(rows, cols) {
  let grid = [];
  let cellW = width / cols;
  let cellH = height / rows;

  for (let i = 0; i < rows; i++) {
  grid[i] = [];
  for (let j = 0; j < cols; j++) {
  let subRows = int(random(1, 4));
  let subCols = int(random(1, 4));
  grid[i][j] = [];

  for (let m = 0; m < subRows; m++) {
  grid[i][j][m] = [];
  for (let n = 0; n < subCols; n++) {
  let x = j * cellW + (n * cellW) / subCols;
  let y = i * cellH + (m * cellH) / subRows;
  let w = cellW / subCols;
  let h = cellH / subRows;
  let col = color(100, 100, random(150, 255)); 
  grid[i][j][m][n] = [x, y, w, h, col];
}
}
}
}
  return grid;
}

  function drawGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
  for (let m = 0; m < grid[i][j].length; m++) {
  for (let n = 0; n < grid[i][j][m].length; n++) {
  let cell = grid[i][j][m][n];
  fill(cell[4]);
  rect(cell[0], cell[1], cell[2], cell[3]);
}
}
}
}
}

  function mousePressed() {
  for (let i = 0; i < gridData.length; i++) {
  for (let j = 0; j < gridData[i].length; j++) {
  for (let m = 0; m < gridData[i][j].length; m++) {
  for (let n = 0; n < gridData[i][j][m].length; n++) {
  let cell = gridData[i][j][m][n];
  let x = cell[0];
  let y = cell[1];
  let w = cell[2];
  let h = cell[3];
 if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
cell[4] = color(random(100, 255), 100, 255); 
drawGrid(gridData);
}
}
}
}
}
}
