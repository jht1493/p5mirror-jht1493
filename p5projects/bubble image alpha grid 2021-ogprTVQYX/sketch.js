let a_bubbles = [];
let a_alpha = 60;
let n_start = 1000;
let a_canvas;
let save_count = 0;
let a_select_color;
let back_color = 100;
let a_img;

function preload() {
  // preload() runs once
  // a_img = loadImage('images/jht-side-400.jpg');
  a_img = loadImage('images/jht-hs-4x-cu.jpg');
  // console.log('preload img', a_img)
}

function setup() {
  // console.log('setup img', a_img)
  a_canvas = createCanvas(a_img.width, a_img.height);
  background(back_color);

  add_bubbles(n_start);
  init_ui();
  
  // strokeWeight(0);
  noStroke();
}

function add_bubble(x, y) {
  let gray = random([0, 255]);
  if (a_select_color == 'white') {
    gray = 255;
  } else if (a_select_color == 'black') {
    gray = 0;
  }
  // let r = random(1, 4);
  // let r = random([1, 2, 4]);
  // let r = random([2, 4, 8]);
  // let r = random([2, 4, 8, 16]);
  // let r = random([1, 2, 4, 20]);
  // let r = random([2, 4, 8, 12]);
  // let r = random([8]);
  let r = random([4, 8, 16]);
  // let r = random([1, 2, 3]);
  let fuz = random([2, 4, 8])
  let alpha = a_alpha;
  let bub = {
    x,
    y,
    r,
    fuz,
    gray,
    alpha
  }
  a_bubbles.push(bub);
}

function init_ui() {
  a_canvas.mouseMoved(canvas_mouseMoved)

  let save_btn = createButton('Save');
  save_btn.style('font-size', '12pt')
  save_btn.style('margin', '2pt 0pt');
  save_btn.mousePressed(save_canvas);

  let more_btn = createButton('More');
  more_btn.style('font-size', '12pt')
  more_btn.style('margin', '2pt 2pt');
  more_btn.mousePressed(more_bubbles);

  let reset_btn = createButton('Reset');
  reset_btn.style('font-size', '12pt')
  reset_btn.style('margin', '2pt 2pt');
  reset_btn.mousePressed(reset_bubbles);

  let a_span = createSpan('color:')
  a_span.style('font-size', '16pt')
  a_span.style('margin', '0pt 0pt 0pt 4pt');

  let a_select = createSelect();
  a_select.style('font-size', '12pt')
  a_select.style('margin', '2pt 2pt');
  a_select.option('random');
  a_select.option('black');
  a_select.option('white');
  a_select.selected('random');
  a_select.changed(function() {
    a_select_color = this.value();
    console.log('a_select_color', a_select_color)
  })

  createP();

  let b_span = createSpan('bg color:')
  b_span.style('font-size', '16pt')
  b_span.style('margin', '0pt 0pt 0pt 4pt');

  let bc_slide = createSlider(0, 255, 100)
  bc_slide.style('width', '256px');
  bc_slide.input(function() {
    back_color = this.value();
    console.log('back_color', back_color)
    background(back_color);
  })
}

function reset_bubbles() {
  a_bubbles = [];
  background(back_color);
}

function canvas_mouseMoved() {
  if (mouseIsPressed) {
    add_bubble_mouseXY();
  }
}

function more_bubbles() {
  add_bubbles(n_start);
  console.log('more_bubbles a_bubbles.length', a_bubbles.length);
}

function save_canvas() {
  let fname = 'bubm-' + save_count + '-';
  fname += new Date().toISOString();
  console.log('save_btn mousePressed fname', fname);
  saveCanvas(fname, 'png')
  save_count += 1;
}

function add_bubbles(n) {
  for (let ind = 0; ind < n; ind++) {
    let x = random(0, width);
    let y = random(0, height);
    add_bubble(x, y);
  }
}

function add_bubble_mouseXY() {
  add_bubble(mouseX, mouseY);
  console.log('add_bubble_mouseXY', a_bubbles.length);
}


function draw() {
  for (let bub of a_bubbles) {
    draw_bubble(bub);
  }
}

function draw_bubble(bub) {
  move_bubble(bub);
  show_bubble(bub);
}

function move_bubble(bub) {
  let r = bub.r;
  let x = int(bub.x)
  x = x - (x % r)
  x = x + random([-1, 0, 1]) * r;
  let y = int(bub.y);
  y = y - (y % r)
  y = y + random([-1, 0, 1]) * r;
  // constrain(n, low, high)
  bub.x = constrain(x, 0, width);
  bub.y = constrain(y, 0, height);
  // console.log('x', x, 'y', y)
}

function show_bubble(bub) {
  // let col = bub.gray;
  let col = a_img.get(bub.x, bub.y)
  col[3] = bub.alpha;
  fill(col);
  // circle(bub.x, bub.y, bub.r * 2);
  circle(bub.x, bub.y, bub.r );
}

// https://editor.p5js.org/jht1493/sketches/ogprTVQYX
// bubble image alpha grid 2021

// from https://editor.p5js.org/jht1493/sketches/LrhcIzvr2