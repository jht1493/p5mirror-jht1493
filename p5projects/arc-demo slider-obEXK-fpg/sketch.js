// https://editor.p5js.org/jht1493/sketches/obEXK-fpg
// arc-demo slider

// Two variables that will be adjusted
// by sliders for the arc function
let angleA = 0;
let angleB = 90;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // createSlider(min, max, [value], [step])
  createSlider(0, 360, angleA).input(function() {
    angleA = this.value();
  });
  createSlider(0, 360, angleB).input(function() {
    angleB = this.value();
  });
}

function draw() {
  background('lightgray');
  fill('black');
  noStroke();

  let cX = width / 2;
  let cY = height / 2;
  let cW = 200;
  let cH = 200;
  // var angleA = radians(0);
  // var angleB = radians(90);

  arc(cX, cY, cW, cH, angleA, angleB);
}

// https://editor.p5js.org/jht1493/sketches/xTAKoMV-r
// golan-arc-demo slider

// https://editor.p5js.org/golan/sketches/NjDnuiqtT
// golan-arc-demo

// Demonstration of the arc() function:
// https://p5js.org/reference/#/p5/arc
