function setup() {
  createCanvas(600, 600);
  noStroke();
  background(0);
  drawPattern(0, 0, width, 4);
}

function drawPattern(x, y, s, depth) {
  if (depth === 0) return;

  fill(255); 
  rect(x + s / 3, y + s / 3, s / 3, s / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue; 

      let newX = x + (s / 3) * i;
      let newY = y + (s / 3) * j;
      let newS = s / 3;
      
      let xx;
      let yy;
      let sx;
      let sy;

      if (depth === 1) {
        fill(255);
        
        // Non-corner squares
        if(abs(i-j) === 1) {
          // Vertical path
          if(i === 1){
            xx = newX + newS/3;
            yy = newY;
            sx = newS / 3;
            sy = newS;
          }
          // Horizontal Path
          else if(j === 1) {
            xx = newX;
            yy = newY + newS/3;
            sx = newS;
            sy = newS / 3;
          }
          
        }
        else {
          xx = newX + newS/3;
          yy = newY + newS/3;
          sx = newS / 3;
          sy = newS / 3;
        }
        fill(255);
        console.log(i, j, ": ", xx, yy, sx, sy);
        rect(xx,yy,sx,sy);
      }

      drawPattern(newX, newY, newS, depth - 1);
    }
  }
}

function drawPattern_a(x, y, s, depth) {
  if (depth === 0) return;

  fill(255); 
  rect(x + s / 3, y + s / 3, s / 3, s / 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue; 

      let newX = x + (s / 3) * i;
      let newY = y + (s / 3) * j;
      let newS = s / 3;

      if (depth === 1) {
        fill(255);
        rect(newX + newS/3, newY + newS/3, newS/3, newS/3);
      }

      drawPattern(newX, newY, newS, depth - 1);
    }
  }
}
