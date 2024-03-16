var startX = 20;     // Initial x-coordinate
var stopX = 160;     // Final x-coordinate
var startY = 30;     // Initial y-coordinate
var stopY = 80;      // Final y-coordinate
var x = startX;    // Current x-coordinate
var y = startY;    // Current y-coordinate
var step = 0.01;  // createCanvas of each step (0.0 to 1.0)
var pct = 0.0;     // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(240, 120).mousePressed(function () {
    startX = x;
    startY = y;
    stopX = mouseX;
    stopY = mouseY;
    pct = 0;
  });
  createSpan('click on the canvas to have dot follow')
}

function draw() {
  background(0);
  if (pct < 1.0) {
    x = startX + ((stopX-startX) * pct);
    y = startY + ((stopY-startY) * pct);  // Correction
    pct += step;
  }
  ellipse(x, y, 20, 20);
}

// https://editor.p5js.org/jht1493/sketches/W11fu5LhG
// Ex_08_06 Tween mouse

// https://editor.p5js.org/jht1493/sketches/vJUCok9aU
// Ex_08_06 Tween

// https://github.com/lmccart/gswp5.js-code/blob/master/08_Motion/Ex_08_06.js