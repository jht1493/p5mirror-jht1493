let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  
  background(220);
  
  //body
  fill(250, 160, 80);
  //back back leg
  ellipse(550, 300, 50, 150);
  ellipse(550, 360, 60, 50);
  line(555, 375, 530, 378);
  line(552, 365, 520, 365);
  line(549, 355, 520, 355);
  //front back leg
  ellipse(300, 300, 50, 150);
  ellipse(290, 360, 60, 50);
  line(275, 380, 300, 375);
  line(262, 370, 290, 365);
  line(259, 360, 280, 355);
  //body
  ellipse(400, 210, 400, 200);
  //front front leg
  ellipse(350, 300, 50, 150);
  ellipse(340, 360, 60, 50);
  line(345, 375, 320, 378);
  line(342, 365, 310, 365);
  line(339, 355, 310, 355);
  //back front leg
  ellipse(500, 300, 50, 150);
  ellipse(490, 360, 60, 50);
  line(500, 378, 470, 378);
  line(490, 365, 460, 365);
  line(490, 352, 460, 355);
  //tail
  ellipse(650, 180, 220, 30);

  
  //head&ears
  fill(250, 160, 80);
  triangle(110, 155, 180, 100, 110, 75);
  triangle(290, 155, 220, 100, 300, 75);
  circle(200, 200, 200);
  fill(255, 150, 180);
  ellipse(130, 105, 20, 30);
  fill(255, 150, 180);
  ellipse(275, 105, 20, 30);
  
  //nose&mouth
  fill(255, 150, 180);
  triangle(200, 230, 190, 220, 210, 220);
  line(220, 250, 200, 230);
  line(180, 250, 200, 230);

  //eyes
  fill(250, 250, 250);
  ellipse(150, 180, 55, 30);
  ellipse(250, 180, 55, 30);
  fill(50, 220, 50);
  circle(150+winMouseX/50, 177+winMouseY/100, 22);
  circle(230+winMouseX/50, 177+winMouseY/100, 22);
  fill(0, 0, 0);
  circle(150+winMouseX/50, 177+winMouseY/100, 16);
  circle(230+winMouseX/50, 177+winMouseY/100, 16);
  fill(260, 260, 260);
  circle(153+winMouseX/50, 175+winMouseY/100, 6);
  circle(228+winMouseX/50, 175+winMouseY/100, 6);

  //line
    strokeWeight(9);
    stroke(51, 100);
    dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
  strokeWeight (1);
  stroke(0);
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
