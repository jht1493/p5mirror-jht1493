let a_vid;

function setup() {
  // canvas is resolution of webcam
  createCanvas(640, 480);

  // create a webcam video
  a_vid = createCapture(VIDEO);
  a_vid.size(width, height);
  a_vid.hide(); // hide it
  pixelDensity(1)
}

function draw() {
  background(220);

  // load canvas pixels 
  loadPixels();

  // load webcam pixels 
  a_vid.loadPixels();

  let w2 = width / 2;

  // go through all pixels 
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      let ii = (width * y + x) * 4;
      let ri = ((width * y) + (width - x - 1)) * 4;
      if (x < w2) {
        // true mirror image
        pixels[ii + 0] = a_vid.pixels[ri + 0];
        pixels[ii + 1] = a_vid.pixels[ri + 1];
        pixels[ii + 2] = a_vid.pixels[ri + 2];
        // pixels[ii + 3] = a_vid.pixels[ri + 3];
      } else {
        // draw red channel one direction
        // blue and grn channels opposite 
        pixels[ii + 0] = a_vid.pixels[ii + 0];
        pixels[ii + 1] = a_vid.pixels[ri + 1];
        pixels[ii + 2] = a_vid.pixels[ri + 2];
        // pixels[ii+ 3] = a_vid.pixels[ri + 3];
      }
    }
  }

  // don't forget to update the pixels!
  updatePixels();
}

// https://editor.p5js.org/lisajamhoury/sketches/DUaE4KLlx