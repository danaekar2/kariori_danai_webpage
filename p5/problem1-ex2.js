function setup() {
  createCanvas(400, 400);
  background(100);
}

function draw() {
  noLoop();
  stroke(0);
  strokeWeight(1);
  line(0, 0, width, height);
  line(width, 0, 0, height);
  fill(255);
  ellipse(width / 2, height / 2, 80, 80);
  fill(100);
  rectMode(CENTER);
  let squareSize = 56; 
  rect(width / 2, height / 2, squareSize, squareSize);
  fill(255);
  let r = 100; 
  ellipse(width / 2, height / 2 - r, 100, 100);
  ellipse(width / 2, height / 2 + r, 100, 100);
  ellipse(width / 2 - r, height / 2, 100, 100);
  ellipse(width / 2 + r, height / 2, 100, 100);
}
