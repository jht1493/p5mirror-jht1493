let on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (on) {
    background(0, 255, 0)
  } else {
    background(0);
  }
  stroke(255);
  strokeWeight(4);
  noFill();

  let withinX = mouseX > 250 && mouseX < 350
  let withinY = mouseY > 150 && mouseY < 250
  if (withinX && withinY) {
    fill(255, 0, 200);
  }
  rectMode(CENTER);
  rect(300, 200, 100, 100);
}

function mousePressed() {
  if (mouseX > 250 && mouseX < 350 &&
    mouseY > 150 && mouseY < 250) {
    on = ! on;
  }  
}

// https://editor.p5js.org/codingtrain/sketches/yzBpV0CI
// 3.4 Boolean Variables

// Boolean Variables
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.4-boolean-variables.html
// https://youtu.be/Rk-_syQluvc
// https://editor.p5js.org/codingtrain/sketches/yzBpV0CI