function setup() {
  createCanvas(400, 200);
  background(255);

  let x = 0;
  let y = 0;
  let len;

  for (let y = 0; y < height; y += len) {
    // Length will be random choice for each row
    len = random([20, 30, 50]);
    for (let x = 0; x < width; x += len) {
      let col1 = random([100, 200]);
      let col2 = random(["red", "green", "yellow"]);
      draw_shape1(x, y, len, col1, col2);
    }
  }
}

function draw_shape1(x, y, len, col1, col2) {
  console.log("x=" + x + " y=" + y + " len=" + len);
  fill(col1);
  rect(x, y, len, len);
  fill(col2);
  circle(x + len / 2, y + len / 2, len - 2);
}

// https://editor.p5js.org/jht1493/sketches/uWqMpSb09
// 4.2 for-loop random 4

// https://editor.p5js.org/jht1493/sketches/YJojuZV9V
// 4.2 for-loop random 3

// https://editor.p5js.org/jht1493/sketches/Bz-e4Japh
// 4.2 for-loop random 2

// https://editor.p5js.org/jht1493/sketches/cV8HNKv_D
// 4.2 for-loop random

// https://editor.p5js.org/jht1493/sketches/ZRMgh5oWA
// 4.2 for-loop drawShape1

// https://editor.p5js.org/jht1493/sketches/cA_XRhYnI
// 4.1 pattern drawShape1

// https://editor.p5js.org/jht1493/sketches/S9YsVD9gV
// 3.3. pattern while y

// https://editor.p5js.org/jht1493/sketches/QlAHBLxi8e
// 3.3. pattern while

// https://editor.p5js.org/jht1493/sketches/UA_D1rM5A
// 3.3. pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/D34BIqcoE
// 2.5 setup pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/OtE1lw_X2
// 2.5 setup pattern draw_shape1

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC
