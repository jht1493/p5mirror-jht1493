// https://editor.p5js.org/jht1493/sketches/zOy0N1rYt
// Truchet func 4

function setup() {
  createCanvas(400, 400);
  background(190);
  noStroke();
}

function draw() {
  let d = 100;
  let x0 = 0;
  let y0 = 0;
  let backc = 220;
  let forec = 0;
  let colr = [
    [backc, forec],
    [forec, backc],
  ];
  truc(x0 + 000, y0, d, 0, colr[0]);
  truc(x0 + 100, y0, d, 1, colr[0]);
  truc(x0 + 200, y0, d, 0, colr[1]);
  truc(x0 + 300, y0, d, 1, colr[1]);
}

function truc(x0, y0, d, m, cols) {
  fill(cols[0]);
  rect(x0, y0, d, d);
  fill(cols[1]);
  let d1 = m ? d : 0;
  let d2 = m ? 0 : d;
  arc(x0 + d1, y0, d, d, HALF_PI * (m + 0), HALF_PI * (m + 1), PIE);
  arc(x0 + d2, y0 + d, d, d, HALF_PI * (m + 2), HALF_PI * (m + 3), PIE);
}

// arc(x, y, w, h, start, stop, [mode], [detail])

// https://editor.p5js.org/jht1493/sketches/f5vzsNvfR
// Truchet func 3

// https://editor.p5js.org/jht1493/sketches/u13JQBCSD
// Truchet func 2

// https://editor.p5js.org/jht1493/sketches/V2ifPvqiw
// Truchet func

// https://editor.p5js.org/jht1493/sketches/jK_d9a5uK
// Truchet Therapeutic
