// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

let nwidth = 640;
let nheight = 480;
let capture;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}

function draw() {
  // colorMode(HSB);
  strokeWeight(1);
  background(255);

  // image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight],
  let img = capture.get();
  let midy = mouseY;
  image(img, 0, 0, nwidth, midy, 0, 0, nwidth, midy);

  for (let x = 0; x < img.width; x++) {
    let col = img.get(x, midy);
    stroke(col);
    line(x, midy, x, nheight);
  }
}

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
