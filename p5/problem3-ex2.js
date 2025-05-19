function setup() {
  createCanvas(400, 400); 
  background(255); 
}

function draw() {
  let x = random(width);
  let y = random(height);
  let diameter = random(10, 50);
  fill(random(255), random(255), random(255), random(50, 150));
  stroke(random(255), random(255), random(255), random(50, 150));
  circle(x, y, diameter);
}
