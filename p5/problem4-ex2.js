function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  let linesCount = 5;
  
  for (let i = 0; i < linesCount; i++) {
    let x1 = random(width);
    let y1 = 0;
    let x2 = random(width);
    let y2 = height;
    stroke(random(100, 255), random(0, 100), random(0, 100), random(50, 150));
    strokeWeight(0.5);
    line(x1, y1, x2, y2);
  }
}
