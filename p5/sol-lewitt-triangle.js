function setup() {
  createCanvas(500, 500); 
  background(255); 
}
function draw() {
  background(255); 
  let x1 = 100, y1 = 400;
  let x2 = 400, y2 = 400;
  let x3 = lerp(100, 400, mouseX / width);  
  let y3 = lerp(100, 400, mouseY / height); 
  fill(200, 0, 100, 150); 
  stroke(0); 
  strokeWeight(2); 
  triangle(x1, y1, x2, y2, x3, y3);}
