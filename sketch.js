function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(0,255,0);
    
  }
  ellipse(mouseX, mouseY, 80, 80);
}