let hue;
const a_size = 50;

function setup() {
  createCanvas(400, 400);
  hue = 0;
}

function draw() {
  // background(220);
}

function mouseDragged() {
  if (hue > 360) {
    hue = 0;
  } else {
    hue++;
  }
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 200, 200);
  const a_x = round(mouseX / a_size)*a_size;
  const a_y = round(mouseY / a_size)*a_size;
  circle(a_x, a_y, a_size);
}