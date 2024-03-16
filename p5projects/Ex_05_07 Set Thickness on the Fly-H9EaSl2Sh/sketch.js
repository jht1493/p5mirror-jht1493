function setup() {
  createCanvas(480, 120);
  stroke(0, 102);
}

function draw() {
  let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

// https://editor.p5js.org/jht1493/sketches/H9EaSl2Sh
// Ex_05_07 Set Thickness on the Fly

// https://github.com/lmccart/gswp5.js-code/blob/master/05_Response/Ex_05_07.js
