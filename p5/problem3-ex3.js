let snakePath = [];
let snakeLength = 2;
let snakeSpeed = 2;
let snakeHead;
let dir;


let food = [];
let obstacles = [];

function setup() {
  createCanvas(800, 500);
  frameRate(60);

  snakePath = [];
  snakeHead = createVector(width / 2, height / 2);
  dir = createVector(-1, 0); 

  spawnFood(200);
  spawnObstacles(10);
}




function draw() {
  background(255);

  fill(200, 0, 0);
  for (let f of food) {
    rect(f.x, f.y, 4, 4);
  }

  fill(0);
  for (let obs of obstacles) {
    rect(obs.x, obs.y, obs.w, obs.h);
  }

  snakeHead.add(p5.Vector.mult(dir, snakeSpeed));
  
  for(let path of snakePath) {
    if(path.x === snakeHead.x && path.y === snakeHead.y) { 
      gameOver();
    }
  }
  
  snakePath.push(snakeHead.copy());

  while (snakePath.length > snakeLength) {
    snakePath.shift();
  }

  if (
    snakeHead.x < 0 ||
    snakeHead.y < 0 ||
    snakeHead.x > width ||
    snakeHead.y > height
  ) {
    gameOver();
    return;
  }

  for (let obs of obstacles) {
    if (
      snakeHead.x > obs.x &&
      snakeHead.x < obs.x + obs.w &&
      snakeHead.y > obs.y &&
      snakeHead.y < obs.y + obs.h
    ) {
      gameOver();
      return;
    }
  }

  for (let i = food.length - 1; i >= 0; i--) {
    if (dist(snakeHead.x, snakeHead.y, food[i].x, food[i].y) < 5) {
      food.splice(i, 1);
      snakeLength += 20; 
    }
  }

  noFill();
  stroke(100);
  strokeWeight(6);
  
  
  beginShape();
  for (let p of snakePath) {
    vertex(p.x, p.y);
  }
  endShape();
}

function keyPressed() {
  if (key === UP_ARROW && dir.y === 0) {
    dir = createVector(0, -1);
  } else if (key === DOWN_ARROW && dir.y === 0) {
    dir = createVector(0, 1);
  } else if (key === LEFT_ARROW && dir.x === 0) {
    dir = createVector(-1, 0);
  } else if (key === RIGHT_ARROW && dir.x === 0) {
    dir = createVector(1, 0);
  } else if (key === ENTER) {
    setup();
    loop();
  }
}

function spawnFood(count) {
  food = [];
  for (let i = 0; i < count; i++) {
    food.push(createVector(random(width), random(height)));
  }
}

function spawnObstacles(count) {
  obstacles = [];
  for (let i = 0; i < count; i++) {
    let w = random(30, 60);
    let h = random(30, 60);
    let x = random(width - w);
    let y = random(height - h);
    obstacles.push({ x, y, w, h });
  }
}

function gameOver() {
  noLoop();
  fill(255, 0, 0);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  textSize(16);
  text("Press enter to restart", width / 2, height / 2 + 40);
}
