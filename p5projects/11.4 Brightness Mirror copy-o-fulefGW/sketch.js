var video;

var vScale = 16;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(51);

  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x - 1 + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = 255 - (r + g + b) / 3;

      var w = map(bright, 0, 255, 0, vScale);

      noStroke();
      fill(r,g,b);
      rectMode(CENTER);
      circle(x * vScale, y * vScale, w);
    }
  }
}

// 2020-10-25 jht: Correct index, remove unneeed loadPixels
// https://github.com/CodingTrain/website/tree/master/Tutorials/P5JS/p5.js_video