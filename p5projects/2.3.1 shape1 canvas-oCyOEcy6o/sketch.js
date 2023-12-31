let counter1 = 0;
let shape1speed = 10;

let lenxy = 100;

function setup() {
  createCanvas(400, 200).mousePressed(function() {
    shape1x = mouseX;
    shape1y = mouseY;
  });
  createSpan('click on canvas to move the shapes');
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  let x = counter1 % width;
  let y = (int(counter1/width)*shape1speed) % height;
  circle(x, y, lenxy);
  
  counter1 += shape1speed;
}

// https://editor.p5js.org/jht1493/sketches/oCyOEcy6o
// 2.3.1 shape1 canvas

// https://editor.p5js.org/jht1493/sketches/WL3YIp05x
// 2.3.1 shape1 speed

// https://editor.p5js.org/jht1493/sketches/CwYDz_4N2
// 2.2.2 variable shape1x width

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC