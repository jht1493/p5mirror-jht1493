// https://editor.p5js.org/jht1493/sketches/TCx3dZ1qF
// delete from array

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    addBubble(x, y);
  }
}

function addBubble(x, y) {
  let r = random(20, 60);
  let b = new Bubble(x, y, r);
  bubbles.push(b);
}

function mousePressed() {
  // we must delete by examining the elements
  // from top to bottom of the array
  // need to use for loop
  let someDeleted = false;
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      // delete 1 an element from the array
      bubbles.splice(i, 1);
      someDeleted = true;
    }
  }
  if (!someDeleted) {
    addBubble(mouseX, mouseY)
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    let bub = bubbles[i];
    if (bub.contains(mouseX, mouseY)) {
      bub.changeColor(255);
    } else {
      bub.changeColor(0);
    }
    bub.run();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  run() {
    this.move();
    this.show();
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Removing Objects from Arrays
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.5-removing-objects-from-array.html
// https://youtu.be/tA_ZgruFF9k

// Main Sketch: https://editor.p5js.org/codingtrain/sketches/smC4Jedi
// Trail Sketch: https://editor.p5js.org/codingtrain/sketches/9Ve9S6Mx
